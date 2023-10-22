import { type User } from '@shared/api/user'
import { type InputAutoComplete } from '@shared/ui/Input'

export interface IProfileField {
  value: keyof User
  inputId: string
  labelKey: string
  type: string
  autoComplete?: EnumAsUnion<typeof InputAutoComplete>
}

export const profileFields: IProfileField[] = [
  {
    value: 'fname',
    inputId: 'first-name',
    labelKey: 'fields.first_name',
    type: 'text',
    autoComplete: 'given-name'
  },
  {
    value: 'lname',
    inputId: 'last-name',
    labelKey: 'fields.last_name',
    type: 'text',
    autoComplete: 'family-name'
  },
  {
    value: 'age',
    inputId: 'age',
    labelKey: 'fields.age',
    type: 'text'
  },
  {
    value: 'gender',
    inputId: 'sex',
    labelKey: 'fields.gender',
    type: 'text',
    autoComplete: 'sex'
  }
]
