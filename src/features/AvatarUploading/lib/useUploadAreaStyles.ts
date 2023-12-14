import { useMemo } from 'react'

import { getUploadAreaStyles } from './getUploadAreaStyles'

export const useUploadAreaStyles = (isDragActive: boolean) => {
  return useMemo(() => getUploadAreaStyles(isDragActive), [isDragActive])
}
