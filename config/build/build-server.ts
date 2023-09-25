import { BuildServerFunc } from './types/config';

export const buildServer: BuildServerFunc = ({ port }) => ({
  port,
  hot: true,
  open: true,
  historyApiFallback: true
});
