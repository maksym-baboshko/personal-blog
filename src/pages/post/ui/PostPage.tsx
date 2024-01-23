import { memo, type FC } from 'react'

import cn from 'classnames'
// import { useTranslation } from 'react-i18next'

import { Text } from '@shared/ui/Text'
import { AuthGuard } from '@shared/ui/AuthGuard'

import cls from './PostPage.module.scss'

const PostPage: FC = memo(function PostPage(props) {
  // const { t } = useTranslation('post')

  return (
    <AuthGuard>
      <Text className={cn(cls.wrapper)} heading="Post" textAlign="center" fullPage />
    </AuthGuard>
  )
})

export default PostPage
