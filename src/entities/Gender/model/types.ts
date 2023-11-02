import { type UserGenderValue } from './constants'

export type tUserGender = EnumAsUnion<typeof UserGenderValue>
export type tUserGenderOptions = Array<{ value: UserGenderValue; label: string }>
