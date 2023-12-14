export const readFileAsArrayBuffer = async (file: File): Promise<ArrayBuffer> => {
  return await new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.abort = () => {
      reject(new Error('File reading has been aborted'))
    }

    reader.onerror = () => {
      reject(new Error('File reading has failed'))
    }

    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        resolve(reader.result)
      } else {
        reject(new Error('Invalid result type'))
      }
    }

    reader.readAsArrayBuffer(file)
  })
}
