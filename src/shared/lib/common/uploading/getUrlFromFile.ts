export const getUrlFromFile = (file: File | FileList) => {
  return URL.createObjectURL(file instanceof File ? file : file[0])
}
