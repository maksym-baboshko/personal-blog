import { buildAlias } from './build-alias'
import { type BuildResolversFunc } from './types/config'

export const buildResolvers: BuildResolversFunc = (options) => ({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  modules: [options.paths.src, 'node_modules'],
  mainFiles: ['index'],
  alias: buildAlias(options)
})
