module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports', 'react', 'react-native'],
  extends: ['@react-native-community', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // Prefer TS rule over base
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],

        // Error on unused imports
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],

        // Existing rules
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/func-call-spacing': 'off',
        'react-native/no-inline-styles': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-console': ['error', { allow: ['warn'] }],
        'react-hooks/exhaustive-deps': 'off',
        'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      },
    },
  ],
  env: {
    jest: true,
  },
};
