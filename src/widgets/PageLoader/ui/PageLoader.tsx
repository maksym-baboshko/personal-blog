import { type FC } from 'react'

import cn from 'classnames'

import { Loader } from '@shared/ui/Loader'

import cls from './PageLoader.module.scss'

export const PageLoader: FC = () => {
  return (
    <div className={cn(cls['page-loader-wrapper'])}>
      <Loader />
    </div>
  )
}
