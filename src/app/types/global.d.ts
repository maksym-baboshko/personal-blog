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

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
