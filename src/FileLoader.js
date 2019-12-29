import { parseBattlescribeXML } from './BattlescribeParser'

const JSZip = require('jszip')

const unzip = (file) => {
  if (file[0] !== 'P') { return Promise.resolve(file) } else {
    const jszip = new JSZip()
    return jszip.loadAsync(file)
      .then((zip) => (
        zip.file(/[^/]+\.ros/)[0].async('string') // Get roster files that are in the root
      ))
  }
}

const parseFile = (file) => (
  unzip(file).then(parseBattlescribeXML)
)

export const loadFile = async (file) => {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new DOMException("Problem parsing input file."));
    };
    reader.onloadend = async () => {
      resolve(parseFile(reader.result));
    }
    reader.readAsBinaryString(file);
  });
}

export const loadFiles = (files) => {
  return loadFile(files[0]);
}
