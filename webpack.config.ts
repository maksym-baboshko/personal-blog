import path from 'path'
import { type Configuration } from 'webpack'

import { buildConfig } from './config/build/build-config'
import { type BuildMode, type BuildEnv, type BuildPaths } from './config/build/types'

const getApiBaseURL = (mode: BuildMode, apiUrl?: string): string => {
  if (apiUrl) return apiUrl
  else if (mode === 'production') return '/production-api'

  return 'http://localhost:8000/api'
}

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
  const apiURL = getApiBaseURL(mode, env.apiURL)

  const config: Configuration = buildConfig({ mode, paths, isDev, port, apiURL })

  return config
}
