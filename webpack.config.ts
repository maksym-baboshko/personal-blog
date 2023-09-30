import path from 'path'
import { type Configuration } from 'webpack'

import { buildConfig } from './config/build/build-config'
import { type BuildEnv, type BuildPaths } from './config/build/types'

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const port = env.port ?? 3000
  const mode = env.mode ?? 'development'
  const isDev = mode === 'development'

  const config: Configuration = buildConfig({ mode, paths, isDev, port })

  return config
}
