import path from 'path'

import { type BuildAliasFunc } from '../types/config'

export const buildAlias: BuildAliasFunc = ({ paths }) => {
  const entries = ['app', 'pages', 'widgets', 'features', 'entities', 'shared']

  const aliases = entries.reduce<Record<string, string>>((acc, entry) => {
    acc[`@${entry}`] = path.resolve(paths.src, entry)

    return acc
  }, {})

  return aliases
}
