module.exports = {
  roots: ["./src"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["node_modules/","build/"],
  transform: {
    "^.+\\.tsx?$": '@morenobr/guideline-react-jest/babelTransform.js'
  },
  testMatch: ["**/*.test.(ts|tsx)"],
  moduleNameMapper: {
    // Mocks out all these file formats when tests are run
    "\\.(css)$": "identity-obj-proxy"
  },
  collectCoverageFrom: ["src/**", "!src/**/*.stories.tsx"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
