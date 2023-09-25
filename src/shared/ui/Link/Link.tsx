import cn from 'classnames';
import { Link as RouterLink } from 'react-router-dom';

import { LinkTheme } from './Link.theme';
import { LinkProps } from './Link.props';

import cls from './Link.module.scss';

export const Link = (props: LinkProps) => {
  const {
    children,
    className,
    theme = LinkTheme.PRIMARY,
    ...restProps
  } = props;

  return (
    <RouterLink className={cn(cls.link, cls[theme], className)} {...restProps}>
      {children}
    </RouterLink>
  );
};
