import { type BuildServerFunc } from './types/config'

export const buildServer: BuildServerFunc = ({ port }) => ({
  port,
  hot: true,
  open: false,
  historyApiFallback: true
})
