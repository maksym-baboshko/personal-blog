import { buildAlias } from './lib'
import { type BuildResolversFunc } from './types'

export const buildResolvers: BuildResolversFunc = (options) => ({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  modules: [options.paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: buildAlias(options)
})
