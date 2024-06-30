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
    maxWorkers: '50%', // Limita o número de testes executados em paralelo a 50% dos núcleos disponíveis
    testEnvironment: "node",
    watchPathIgnorePatterns: [
      "node_modules"
    ],
  };  