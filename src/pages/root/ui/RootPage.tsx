import { type FC } from 'react'

import { useAuth } from '@shared/hooks/common'

import { MainPage } from '../../main'
import { LandingPage } from '../../landing'

export const RootPage: FC = () => {
  const { isAccessAllowed } = useAuth()

  return isAccessAllowed ? <MainPage /> : <LandingPage />
}
