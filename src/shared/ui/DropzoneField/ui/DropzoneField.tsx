import { useCallback } from 'react'

import { useDropzone } from 'react-dropzone'
import { useController } from 'react-hook-form'

import { getUrlFromFile } from '@shared/lib/common'

import { type DropzoneFieldFC } from './DropzoneField.types'

export const DropzoneField: DropzoneFieldFC = ({ control, name, multiple, children: Dropzone }) => {
  const { field } = useController({ name, control })

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const [file] = acceptedFiles

      field.onChange({ file, url: getUrlFromFile(file) })
    },
    [field]
  )

  const dropzoneState = useDropzone({ onDrop, multiple, noClick: true })

  return <Dropzone {...dropzoneState} {...field.value} />
}
