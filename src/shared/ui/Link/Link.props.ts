import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { LinkTheme } from './Link.theme';

export interface LinkProps extends RouterLinkProps {
  theme?: LinkTheme;
}
