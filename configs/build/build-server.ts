import { BuildServerFunc } from './types/config';

export const buildServer: BuildServerFunc = ({ port }) => ({
  port,
  open: true,
  historyApiFallback: true
});
