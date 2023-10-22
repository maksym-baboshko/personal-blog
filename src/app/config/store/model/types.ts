enum InitializationStatus {
  IDLE = 'idle',
  INITIALIZING = 'initializing',
  FAILED = 'failed',
  INITIALIZED = 'initialized'
}

export type tInitializationStatus = EnumAsUnion<typeof InitializationStatus>

export interface AppSchema {
  isInitialized: boolean
  status: tInitializationStatus
}
