import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Use ts-jest for TypeScript support
  testEnvironment: 'node', // Use Node.js environment for backend tests
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files using ts-jest
  },
  transformIgnorePatterns: [
    '/node_modules/', // Ignore transformations for node_modules
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Supported file extensions
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'], // Match test files
};

export default config;