import { type FC } from 'react'

import { type DropzoneState } from 'react-dropzone'

import { type iFile } from '@shared/types/common'

interface DropzoneFieldProps {
  name: string
  control: any
  multiple?: boolean
  children: FC<DropzoneState & iFile>
}

export type DropzoneFieldFC = FC<DropzoneFieldProps>
