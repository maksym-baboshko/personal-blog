import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Link, LinkTheme } from '@shared/ui/Link'

import { type NavbarFC } from './Navbar.types'

import cls from './Navbar.module.scss'

export const Navbar: NavbarFC = ({ className }) => {
  const { t } = useTranslation('common')

  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.links}>
        <Link to='/' theme={LinkTheme.INVERTED}>
          {t('main')}
        </Link>
        <Link to='/about' theme={LinkTheme.INVERTED}>
          {t('about')}
        </Link>
      </div>
    </div>
  )
}
