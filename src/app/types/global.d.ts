/* eslint-disable @typescript-eslint/naming-convention */
declare module '*.module.css'
declare module '*.module.scss'

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.gif'

declare module '*.svg' {
  const SVG: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default SVG
}

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'frontend' | 'storybook' | 'jest'

type StringValues<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : never
}[keyof T]

type NumberValues<T> = {
  [K in keyof T]: T[K] extends number ? T[K] : never
}[keyof T]

//* Usage : type EnumValues = EnumAsUnion<typeof anEnum>
type EnumAsUnion<T> = `${StringValues<T>}` | NumberValues<T>

type Prettify<T> = { [P in keyof T]: T[P] }
