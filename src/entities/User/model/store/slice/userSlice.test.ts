import { type DeepPartial } from '@reduxjs/toolkit'

import { mockedUser } from '@shared/lib/storybook'

import { type iUserState } from '../../types'

import { userActions, userReducer } from './userSlice'

describe('userSlice', () => {
  it('should auth user with credentials', () => {
    const state: DeepPartial<iUserState> = { isAuthenticated: false, data: null, token: null }

    expect(
      userReducer(
        state as iUserState,
        userActions.authWithCredentials({ user: mockedUser.data, accessToken: 'jwt token' })
      )
    ).toEqual({
      isAuthenticated: true,
      data: mockedUser.data,
      token: 'jwt token'
    })
  })

  it('should update user data', () => {
    const state: DeepPartial<iUserState> = {
      isAuthenticated: false,
      data: mockedUser.data,
      token: null
    }

    expect(
      userReducer(
        state as iUserState,
        userActions.updateData({
          ...mockedUser.data,
          fname: 'John',
          lname: 'Doe'
        })
      )
    ).toEqual({
      isAuthenticated: true,
      data: {
        ...mockedUser.data,
        fname: 'John',
        lname: 'Doe'
      },
      token: null
    })
  })

  it('should log out user', () => {
    const state: DeepPartial<iUserState> = {
      isAuthenticated: true,
      data: mockedUser.data,
      token: 'jwt token'
    }

    expect(userReducer(state as iUserState, userActions.logOut())).toEqual({
      isAuthenticated: false,
      data: null,
      token: null
    })
  })
})
