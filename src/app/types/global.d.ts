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

type OptionalRecord<K extends string | number | symbol, V> = { [P in K]?: V }
