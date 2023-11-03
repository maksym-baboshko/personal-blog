import { type tUser } from '@entities/User'
import { type InputAutoComplete } from '@shared/ui/Input'

export interface IProfileField {
  name: keyof tUser
  inputId: string
  labelKey: string
  placeholderKey: string
  type: string
  autoComplete?: EnumAsUnion<typeof InputAutoComplete>
}

export const profileFields: IProfileField[] = [
  {
    name: 'fname',
    inputId: 'first-name',
    labelKey: 'fields.first_name.label',
    placeholderKey: 'fields.first_name.placeholder',
    type: 'text',
    autoComplete: 'given-name'
  },
  {
    name: 'lname',
    inputId: 'last-name',
    labelKey: 'fields.last_name.label',
    placeholderKey: 'fields.last_name.placeholder',
    type: 'text',
    autoComplete: 'family-name'
  },
  {
    name: 'age',
    inputId: 'age',
    labelKey: 'fields.age.label',
    placeholderKey: 'fields.age.placeholder',
    type: 'text'
  }
]
