import { parseBattlescribeXML } from './parsers/KillTeam2018/BattlescribeParser'
import JSZip from 'jszip'
import { DOMParser } from 'xmldom'
import * as XPath from 'xpath-ts'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpath = XPath.useNamespaces({ roster: 'http://www.battlescribe.net/schema/rosterSchema' })

const unzip = async (file) => {
  if (file[0] !== 'P') {
    return file
  } else {
    const jszip = new JSZip()
    const zip = await jszip.loadAsync(file)
    return zip.file(/[^/]+\.ros/)[0].async('string') // Get roster files that are in the root
  }
}

const parseFile = async (file) => {
  const xml = await unzip(file)
  const doc = new DOMParser().parseFromString(xml)
  const gameSystemId = xpath('/roster:roster', doc)[0].getAttribute('gameSystemId')
  switch(gameSystemId) {
    case "a467-5f42-d24c-6e5b": // Kill Team 2018
      return parseBattlescribeXML(doc);
    case "3b7e-7dab-f79f-2e74": // Kill Team 2021
      console.log("KT2021 roster detected! Support coming soon, but nothing yet, sorry!");
      break;
    default:
      console.log("Unsupported game system!");
  }
}

export const loadFile = async (file) => {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort()
      reject(new DOMException('Problem parsing input file.'))
    }
    reader.onloadend = async () => {
      resolve(parseFile(reader.result))
    }
    reader.readAsBinaryString(file)
  })
}

export const loadFiles = (files) => {
  return loadFile(files[0])
}
