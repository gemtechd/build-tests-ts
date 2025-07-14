module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
        '^.+\\.ts$': 'ts-jest', // אם אתה משתמש ב-TypeScript
    },
    moduleFileExtensions: ['js', 'ts'],
};
