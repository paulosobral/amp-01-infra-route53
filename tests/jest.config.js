// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    reporters: [
      'default',
      ['jest-junit', {
        outputDirectory: './reports/junit',
        outputName: 'junit.xml',
      }],
    ],
  };  