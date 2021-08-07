import { parseBattlescribeXML as parseKillTeam2018 } from './parsers/KillTeam2018/BattlescribeParser'
import { parseBattlescribeXML as parseKillTeam2021 } from './parsers/KillTeam2021/BattlescribeParser'
import JSZip from 'jszip'
import { DOMParserImpl } from 'xmldom-ts'
import * as XPath from 'xpath-ts'
import { Roster } from './components/KillTeam2018/types';

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const unzip = async (file: string) : Promise<string> => {
  if (file.charAt(0) !== 'P') {
    return file
  } else {
    const jszip = new JSZip()
    const zip = await jszip.loadAsync(file)
    return zip.file(/[^/]+\.ros/)[0].async('string') // Get roster files that are in the root
  }
}

const parseFile = (file: string) : Roster => {
  const doc = new DOMParserImpl().parseFromString(file)
  const gameSystemId = (xpSelect('/bs:roster/@gameSystemId', doc, true) as Node).nodeValue
  switch (gameSystemId) {
    case 'a467-5f42-d24c-6e5b':
      return parseKillTeam2018(doc) as Roster
    case '3b7e-7dab-f79f-2e74':
      return parseKillTeam2021(doc)
    default:
      throw new Error('Unsupported game system!')
  }
}

export const loadFile = async (file: File) : Promise<Roster> => {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort()
      reject(new DOMException('Problem parsing input file.'))
    }
    reader.onloadend = async () => {
      const content = reader.result as string
      const file = await unzip(content)
      resolve(parseFile(file))
    }
    reader.readAsBinaryString(file)
  })
}

export const loadFiles = (files: File[]) : Promise<Roster> => {
  return loadFile(files[0])
}
