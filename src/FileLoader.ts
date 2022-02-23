import { parseBattlescribeXML as parseKillTeam2018 } from './parsers/KillTeam2018/BattlescribeParser'
import { parseBattlescribeXML as parseKillTeam2021 } from './parsers/KillTeam2021/BattlescribeParser'
import { parseBattlescribeXML as parse40k9e } from './parsers/WH40k9e/BattlescribeParser'
import JSZip from 'jszip'
import { DOMParserImpl } from 'xmldom-ts'
import * as XPath from 'xpath-ts'
import { Roster as Roster2018 } from './types/KillTeam2018'
import { Roster as Roster2021 } from './types/KillTeam2021'
import { Roster as Roster40k9e } from './types/WH40k9e'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const unzip = async (file: string): Promise<string> => {
  if (file.charAt(0) !== 'P') {
    return file
  } else {
    const jszip = new JSZip()
    const zip = await jszip.loadAsync(file)
    return await zip.file(/[^/]+\.ros/)[0].async('string') // Get roster files that are in the root
  }
}

const parseFile = (file: string): Roster2018 | Roster2021 | Roster40k9e => {
  const doc = new DOMParserImpl().parseFromString(file)
  const gameSystemId = (xpSelect('/bs:roster/@gameSystemId', doc, true) as Node).nodeValue
  switch (gameSystemId) {
    case 'a467-5f42-d24c-6e5b':
      return parseKillTeam2018(doc) as Roster2018
    case '3b7e-7dab-f79f-2e74':
      return parseKillTeam2021(doc)
    case '28ec-711c-d87f-3aeb':
      return parse40k9e(doc)
    default:
      throw new Error('Unsupported game system!')
  }
}

export const loadFile = async (file: File): Promise<Roster2018 | Roster2021 | Roster40k9e> => {
  const reader = new FileReader()
  return await new Promise((resolve, reject) => {
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

export const loadFiles = async (files: File[]): Promise<Roster2018 | Roster2021 | Roster40k9e> => {
  return await loadFile(files[0])
}
