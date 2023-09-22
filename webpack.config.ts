import path from 'path';
import { Configuration } from 'webpack';

import { buildConfig } from './configs/build/build-config';
import { BuildEnv, BuildPaths } from './configs/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'main.tsx'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html')
  };

  const port = env.port || 3000;
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  const config: Configuration = buildConfig({ mode, paths, isDev, port });

  return config;
};
