import { memo } from 'react'

import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'
import { Button } from '@shared/ui/Button'

import { type ProfileHeaderFC } from './ProfileHeader.types'

import cls from './ProfileHeader.module.scss'

export const ProfileHeader: ProfileHeaderFC = memo(function ProfileHeader(props) {
  const { username, readonly, isEditing, isSaving, onEditing, onCancelEditing, onSave } = props

  const { t } = useTranslation('profile')

  return (
    <div className={cn(cls.header, { [cls.readonly]: readonly })}>
      <Text className={cls.title} heading={readonly ? `@${username}` : t('title')} />

      {!readonly && (
        <div className={cls.actions}>
          {isEditing && (
            <Button onClick={onCancelEditing} variant="outlined" size="sm">
              {t('cancel')}
            </Button>
          )}

          <Button
            onClick={isEditing ? onSave : onEditing}
            loading={isSaving}
            variant="solid"
            size="sm"
          >
            {isEditing ? t('save') : t('edit')}
          </Button>
        </div>
      )}
    </div>
  )
})
