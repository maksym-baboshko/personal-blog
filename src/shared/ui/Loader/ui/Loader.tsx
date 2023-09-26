import cn from 'classnames'

import { type LoaderFC } from './Loader.types'

import cls from './Loader.module.scss'

export const Loader: LoaderFC = ({ className }) => {
  return (
    <div className={cn(cls.loader, className)}>
      <div></div>
      <div></div>
    </div>
  )
}
