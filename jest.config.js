/* eslint-disable no-undef */
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
