import { type BuildServerFunc } from './types'

export const buildServer: BuildServerFunc = ({ port }) => ({
  port,
  hot: true,
  open: false,
  historyApiFallback: true
})
