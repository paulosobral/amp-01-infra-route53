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
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    coverageReporters: [
      "json",
      "text",
      "lcov",
      "clover"
    ],
    coverageThreshold: {
      global: {
        branch: 100,
        functions: 100,
        lines: 100,
        statements:100
      }
    },
    maxWorkers: '50%', // Limita o número de testes executados em paralelo a 50% dos núcleos disponíveis
    testEnvironment: "node",
    watchPathIgnorePatterns: [
      "node_modules"
    ],
  };  