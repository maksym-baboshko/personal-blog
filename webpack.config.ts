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
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, '/'),
    dist: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const port = env.port ?? 3000
  const mode = env.mode ?? 'development'
  const isDev = mode === 'development'
  const project = env.project ?? 'frontend'
  const apiURL = getApiBaseURL(mode, env.apiURL)

  const config: Configuration = buildConfig({ mode, paths, isDev, port, apiURL, project })

  return config
}
