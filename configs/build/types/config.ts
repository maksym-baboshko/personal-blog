import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import {
  RuleSetRule,
  Configuration,
  ResolveOptions,
  WebpackPluginInstance
} from 'webpack';

type BuildResolversFunc = () => ResolveOptions;
type BuildConfigFunc = (options: BuildOptions) => Configuration;
type BuildLoadersFunc = (options: BuildOptions) => RuleSetRule[];
type BuildServerFunc = (options: BuildOptions) => DevServerConfiguration;
type BuildPluginsFunc = (options: BuildOptions) => WebpackPluginInstance[];

type BuildMode = 'development' | 'production';

interface BuildEnv {
  mode: BuildMode;
  port: number;
}

interface BuildPaths {
  entry: string;
  dist: string;
  html: string;
}

interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}

export {
  BuildEnv,
  BuildMode,
  BuildPaths,
  BuildOptions,
  BuildConfigFunc,
  BuildServerFunc,
  BuildLoadersFunc,
  BuildPluginsFunc,
  BuildResolversFunc
};
