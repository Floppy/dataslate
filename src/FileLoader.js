import { parseBattlescribeXML } from './BattlescribeParser'
import JSZip from 'jszip'

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
  return parseBattlescribeXML(xml)
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
