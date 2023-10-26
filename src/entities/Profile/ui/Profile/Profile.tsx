import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'
import { PageLoader } from '@shared/ui/PageLoader'
import { EditableProfile } from '@features/EditableProfile'

import { type ProfileFC } from './Profile.types'

export const Profile: ProfileFC = ({ user, readonly, isLoading, error }) => {
  const { t } = useTranslation('profile')

  return (
    <>
      {isLoading && <PageLoader />}
      {error && <Text color="danger" fullPage heading={t('loading_error')} text={error} />}
      {!error && !isLoading && <EditableProfile readonly={readonly} {...user} />}
    </>
  )
}
