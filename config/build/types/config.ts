import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'
import {
  type Configuration,
  type ResolveOptions,
  type RuleSetRule,
  type WebpackPluginInstance
} from 'webpack'

type BuildConfigFunc = (options: BuildOptions) => Configuration
type BuildLoadersFunc = (options: BuildOptions) => RuleSetRule[]
type BuildResolversFunc = (options: BuildOptions) => ResolveOptions
type BuildAliasFunc = (options: BuildOptions) => Record<string, string>
type BuildServerFunc = (options: BuildOptions) => DevServerConfiguration
type BuildPluginsFunc = (options: BuildOptions) => WebpackPluginInstance[]

type BuildMode = 'development' | 'production'

interface BuildEnv {
  mode: BuildMode
  port: number
}

interface BuildPaths {
  entry: string
  dist: string
  html: string
  src: string
}

interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
}

export type {
  BuildEnv,
  BuildMode,
  BuildPaths,
  BuildOptions,
  BuildAliasFunc,
  BuildConfigFunc,
  BuildServerFunc,
  BuildLoadersFunc,
  BuildPluginsFunc,
  BuildResolversFunc
}
