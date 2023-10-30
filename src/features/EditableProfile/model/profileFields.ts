import { type User } from '@shared/types/user'
import { type InputAutoComplete } from '@shared/ui/Input'

export interface IProfileField {
  name: keyof User
  inputId: string
  labelKey: string
  type: string
  autoComplete?: EnumAsUnion<typeof InputAutoComplete>
}

export const profileFields: IProfileField[] = [
  {
    name: 'fname',
    inputId: 'first-name',
    labelKey: 'fields.first_name',
    type: 'text',
    autoComplete: 'given-name'
  },
  {
    name: 'lname',
    inputId: 'last-name',
    labelKey: 'fields.last_name',
    type: 'text',
    autoComplete: 'family-name'
  },
  {
    name: 'age',
    inputId: 'age',
    labelKey: 'fields.age',
    type: 'text'
  },
  {
    name: 'gender',
    inputId: 'gender',
    labelKey: 'fields.gender',
    type: 'select',
    autoComplete: 'sex'
  }
]
