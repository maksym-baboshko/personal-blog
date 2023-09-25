import cn from 'classnames';

import { ButtonProps } from './Button.props';
import { ButtonTheme } from './Button.theme';

import cls from './Button.module.scss';

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    theme = ButtonTheme.CLEAR,
    ...restProps
  } = props;

  return (
    <button className={cn(cls.button, cls[theme], className)} {...restProps}>
      {children}
    </button>
  );
};
