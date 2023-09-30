import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import { Link } from '@shared/ui/Link'

import { type NavbarFC } from './Navbar.types'

import cls from './Navbar.module.scss'

export const Navbar: NavbarFC = ({ className }) => {
  const { t } = useTranslation('common')

  return (
    <div className={cn(cls.navbar, className)}>
      <div className={cls.links}>
        <Link to="/" color="primary">
          {t('main')}
        </Link>
        <Link to="/about" color="primary">
          {t('about')}
        </Link>
      </div>
    </div>
  )
}
