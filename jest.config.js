module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^App(.*)$': '<rootDir>/app$1',
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
  roots: ['<rootDir>/'],
  transformIgnorePatterns: ['/node_modules/', '/dist/', '<rootDir>/node_modules/(?!axios)/'],
  testMatch: ['<rootDir>/app/**/*.spec.{js,jsx}'],
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/(index).js',
    '!app/**/*.(stories).{js,jsx}',
    '!app/**/*.(api).{js,jsx}',
    '!app/**/*.(constants).{js,jsx}',
    '!app/**/(constants).{js,jsx}',
  ],
  coverageReporters: ['json-summary', 'text', 'lcov', 'cobertura'],
  clearMocks: true,
};
