import { type DeepPartial } from '@reduxjs/toolkit'

import { mockedUser } from '@shared/lib/storybook'
import { type RootState } from '@shared/types/store'

import { selectUserId } from './selectUserId'

describe('selectUserId', () => {
  it('should return user id from the state', () => {
    const state: DeepPartial<RootState> = { user: mockedUser }

    expect(selectUserId(state as RootState)).toEqual(mockedUser.data.id)
  })
})
