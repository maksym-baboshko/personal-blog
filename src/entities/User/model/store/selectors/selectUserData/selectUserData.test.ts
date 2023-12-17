import { type DeepPartial } from '@reduxjs/toolkit'

import { mockedUser } from '@shared/lib/storybook'
import { type RootState } from '@shared/types/store'

import { selectUserData } from './selectUserData'

describe('selectUserData', () => {
  it('should return user state', () => {
    const state: DeepPartial<RootState> = { user: mockedUser }

    expect(selectUserData(state as RootState)).toEqual(mockedUser.data)
  })
})
