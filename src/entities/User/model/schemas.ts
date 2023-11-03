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
  minValue,
  minLength,
  transform
} from 'valibot'

import { type tUserGender } from '@entities/Gender'

export const UserSchema = transform(
  object({
    id: number([minValue(1)]),
    roles: array(string()),
    isPrivate: boolean(),
    email: string([minLength(1), email()]),
    username: string([minLength(1), minLength(3)]),
    fname: string([minLength(1, 'fields.first_name.errors.required')]),
    lname: string([minLength(1, 'fields.last_name.errors.required')]),
    age: nullable(number('fields.age.errors.required', [minValue(0, 'fields.age.errors.min')])),
    gender: nullable(picklist(['', 'male', 'female'])),
    avatar: nullable(string()),
    originCity: nullable(string()),
    currentCity: nullable(string()),
    password: optional(string([minLength(1), minLength(8)])),
    config: optional(unknown()),
    permissions: optional(unknown())
  }),
  (output) => {
    return {
      ...output,
      age: output.age || 0,
      avatar: output.avatar || '',
      originCity: output.originCity || '',
      currentCity: output.currentCity || '',
      gender: (output.gender || '') as tUserGender
    }
  }
)
