import { BuildResolversFunc } from './types/config';

export const buildResolvers: BuildResolversFunc = () => ({
  extensions: ['.tsx', '.ts', '.js']
});
