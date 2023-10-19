import { useUserId } from '@shared/hooks/common'
import { useGetUserQuery } from '@shared/api/user'

const REFETCH_INTERVAL = 60000 * 15 // 15 minutes

export const useLoadUser = (): void => {
  const userId = useUserId()

  useGetUserQuery(userId, { skip: !userId, pollingInterval: REFETCH_INTERVAL })
}
