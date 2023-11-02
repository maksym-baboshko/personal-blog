import {
  array,
  email,
  number,
  object,
  string,
  boolean,
  unknown,
  optional,
  picklist,
  nullable,
  minLength,
  transform,
  minValue
} from 'valibot'

import { type tUserGender } from '@entities/Gender'

import { getUserSchemaErrorMsg } from '../lib'

export const EmailSchema = string([
  minLength(1, 'Please enter your email'),
  email('The email address is invalid')
])

export const UsernameSchema = string([
  minLength(1, 'Username is required'),
  minLength(3, 'The username cannot be less than 3 characters')
])

export const PasswordSchema = string([
  minLength(1, 'Password is required'),
  minLength(8, 'Your password must have 8 characters or more')
])

export const UserCredentialsSchema = object({
  email: EmailSchema,
  password: PasswordSchema
})

export const UserSchema = transform(
  object({
    id: number(getUserSchemaErrorMsg('id must be a number')),
    roles: array(string()),
    isPrivate: boolean(),
    email: EmailSchema,
    username: UsernameSchema,
    fname: string([minLength(1, 'First name is required')]),
    lname: string([minLength(1, 'Last name is required')]),
    age: nullable(number('Age must be a number', [minValue(0, 'Age must be a positive number')])),
    gender: nullable(picklist(['', 'male', 'female'], getUserSchemaErrorMsg('Invalid gender'))),
    avatar: nullable(string(getUserSchemaErrorMsg('Invalid avatar'))),
    originCity: nullable(string(getUserSchemaErrorMsg('Invalid originCity'))),
    currentCity: nullable(string(getUserSchemaErrorMsg('Invalid currentCity'))),
    password: optional(PasswordSchema),
    config: optional(unknown()),
    permissions: optional(unknown())
  }),
  (output) => {
    return {
      ...output,
      age: output.age || 0,
      gender: (output.gender || '') as tUserGender,
      avatar: output.avatar || '',
      originCity: output.originCity || '',
      currentCity: output.currentCity || ''
    }
  }
)
