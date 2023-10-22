import { useEffect } from 'react'

import { useAppDispatch } from '@shared/hooks/store'

import { appActions } from '../config/store'

import { useLoadUser } from './useLoadUser'

export const useLoadState = () => {
  const { isLoading } = useLoadUser()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isLoading) return

    dispatch(appActions.appInitialized())
  }, [dispatch, isLoading])
}
