import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'
import {
  type Configuration,
  type ResolveOptions,
  type RuleSetRule,
  type WebpackPluginInstance
} from 'webpack'

export type BuildMode = 'development' | 'production'

export type BuildConfigFunc = (options: BuildOptions) => Configuration
export type BuildLoadersFunc = (options: BuildOptions) => RuleSetRule[]
export type BuildResolversFunc = (options: BuildOptions) => ResolveOptions
export type BuildAliasFunc = (options: BuildOptions) => Record<string, string>
export type BuildServerFunc = (options: BuildOptions) => DevServerConfiguration
export type BuildPluginsFunc = (options: BuildOptions) => WebpackPluginInstance[]

export interface BuildEnv {
  mode: BuildMode
  port: number
}

export interface BuildPaths {
  entry: string
  dist: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
}
