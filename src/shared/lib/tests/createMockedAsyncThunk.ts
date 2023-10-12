import { type DeepPartial, type AsyncThunkAction } from '@reduxjs/toolkit'

import { type RootState } from '@shared/types'
import { $api } from '@shared/api/axios'

type ActionCreator<R, A, RJV> = (arg: A) => AsyncThunkAction<R, A, { rejectValue: RJV }>

export const createMockedAsyncThunk = <Return, Arg, RejectedValue>(
  actionCreator: ActionCreator<Return, Arg, RejectedValue>,
  state?: DeepPartial<RootState>
) => {
  const api = jest.mocked($api)

  const getState = jest.fn(() => state as RootState)
  const dispatch = jest.fn()

  const callAction = async (arg: Arg) => {
    const action = actionCreator(arg)
    const extra = { api }

    return await action(dispatch, getState, extra)
  }

  return { dispatch, getState, api, callAction }
}
