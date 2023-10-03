import cn from 'classnames'

import { type NavbarFC } from './Navbar.types'

import cls from './Navbar.module.scss'

export const Navbar: NavbarFC = ({ className }) => {
  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.links}></div>
    </div>
  )
}
