import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button } from '@shared/ui/Button';
import { getNextLang } from '../lib/changeLanguage';

import { LangSwitcherProps } from './LanguageSwitcher.props';

import cls from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const nextLang = getNextLang(i18n.language);
  const handleLangChange = () => i18n.changeLanguage(nextLang);

  return (
    <Button onClick={handleLangChange} className={cn(cls.switcher, className)}>
      {nextLang.toUpperCase()}
    </Button>
  );
};
