module.exports = {
    preset: 'ts-jest',
    setupFiles: ["<rootDir>/.jest/register-context.ts"],
    testMatch: ["<rootDir>/**/*.test.ts"],
    transform: {
        '^.+\\.(js||jsx|ts|tsx)?$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    }
};
