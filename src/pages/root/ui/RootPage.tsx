import { type FC } from 'react'

import { useAuthGuard } from '@shared/hooks/common'

import { MainPage } from '../../main'
import { LandingPage } from '../../landing'

export const RootPage: FC = () => {
  const { isAccessAllowed } = useAuthGuard()

  return isAccessAllowed ? <MainPage /> : <LandingPage />
}
