import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'
import { Avatar } from '@shared/ui/Avatar'

import { useUploadAreaStyles } from '../../lib'

import { type AvatarUploadAreaFC } from './AvatarUploadArea.types'

import cls from './AvatarUploadArea.module.scss'

export const AvatarUploadArea: AvatarUploadAreaFC = (props) => {
  const { getRootProps, getInputProps, isDragActive, url: avatar } = props

  const { droppableAreaStyles, backdropStyles } = useUploadAreaStyles(isDragActive)
  const { t } = useTranslation('profile')

  return (
    <div className={cls['avatar-area']} style={droppableAreaStyles} {...getRootProps()}>
      <label>
        <input {...getInputProps()} />

        <div className={cls['avatar-backdrop']} style={backdropStyles} />

        <div className={cls['avatar-content']}>
          <Avatar src={avatar} className={cls.avatar} size="lg" />
          <Text
            heading={t('fields.avatar.placeholder.heading')}
            text={t('fields.avatar.placeholder.subheading')}
            textAlign="center"
          />
        </div>
      </label>
    </div>
  )
}
