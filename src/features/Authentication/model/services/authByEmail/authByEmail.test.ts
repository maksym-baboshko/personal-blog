import { userActions } from '@entities/User'
import { createMockedAsyncThunk } from '@shared/lib/tests'
import { LS_JWT_KEY } from '@shared/constants/localStorage'

import { type AuthResponse, type UserCredentials } from '../../types'

import { authByEmail } from './authByEmail'

const creds: UserCredentials = { email: 'test@example.com', password: 'password' }

const responseData: AuthResponse = {
  user: { id: 42, email: 'test@example.com', fname: 'John', lname: 'Doe' },
  accessToken: 'token'
}

describe('authByEmail', () => {
  const thunk = createMockedAsyncThunk(authByEmail)

  it('Should authenticate successfully with valid credentials', async () => {
    thunk.api.post.mockResolvedValue({ data: responseData })

    const actionResult = await thunk.callAction(creds)

    expect(thunk.api.post).toHaveBeenCalled()
    expect(actionResult.payload).toEqual(responseData)
    expect(actionResult.meta.requestStatus).toBe('fulfilled')
  })

  it('should dispatch setUserCreds action with correct payload', async () => {
    thunk.api.post.mockResolvedValue({ data: responseData })

    await thunk.callAction(creds)

    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUserCreds(responseData))
  })

  it('should set JWT token in local storage', async () => {
    thunk.api.post.mockResolvedValue({ data: responseData })

    await thunk.callAction(creds)

    expect(localStorage.setItem).toHaveBeenCalledWith(LS_JWT_KEY, responseData.accessToken)
  })

  it('should fail authentication with invalid credentials', async () => {
    thunk.api.post.mockRejectedValue({ response: { data: 'Invalid credentials' } })

    const actionResult = await thunk.callAction(creds)

    expect(actionResult.payload).toBe('Invalid credentials')
    expect(actionResult.meta.requestStatus).toBe('rejected')
  })

  it('should dispatch rejectWithValue action with correct payload on server error', async () => {
    thunk.api.post.mockRejectedValue({ response: { data: 'Server error' } })

    await thunk.callAction(creds)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.dispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: authByEmail.rejected.type,
        payload: 'Server error'
      })
    )
  })
})
