import { memo, type FC } from 'react'

import { Navigate } from 'react-router-dom'

import { Text } from '@shared/ui/Text'
import { useAuth } from '@shared/hooks/common'

const LandingPage: FC = memo(function LandingPage() {
  const { isAccessAllowed, isAccessDenied, from } = useAuth()

  return (
    <>
      {isAccessAllowed && <Navigate to={from} replace />}
      {isAccessDenied && (
        <div style={{ height: 'calc(100vh - var(--navbar-height))' }}>
          <Text heading="Landing" fullPage />
        </div>
      )}
    </>
  )
})

export default LandingPage
