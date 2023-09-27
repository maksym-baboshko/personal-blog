import type { Config } from 'jest'

const config: Config = {
  rootDir: '../../',
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
  transform: { '^.+\\.svg$': 'jest-transformer-svg' },
  verbose: false,
  clearMocks: true,
  globals: { __IS_DEV__: true },
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts'
  }
}

export default config
