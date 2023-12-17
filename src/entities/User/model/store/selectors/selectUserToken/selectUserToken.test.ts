import { type DeepPartial } from '@reduxjs/toolkit'

import { mockedUser } from '@shared/lib/storybook'
import { type RootState } from '@shared/types/store'

import { selectUserToken } from './selectUserToken'

describe('selectUserToken', () => {
  it('should return user token from the state', () => {
    const state: DeepPartial<RootState> = { user: mockedUser }

    expect(selectUserToken(state as RootState)).toEqual(mockedUser.token)
  })
})
