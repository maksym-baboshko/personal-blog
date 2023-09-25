import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonTheme } from './Button.theme';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  className?: string;
  children?: ReactNode;
}
