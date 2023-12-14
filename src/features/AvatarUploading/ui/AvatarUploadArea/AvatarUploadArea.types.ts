import { type FC } from 'react'

import { type DropzoneState } from 'react-dropzone'

import { type iFile } from '@shared/types/common'

interface AvatarUploadAreaProps extends DropzoneState, iFile {}

export type AvatarUploadAreaFC = FC<AvatarUploadAreaProps>
