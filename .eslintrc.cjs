module.exports = {
  // Treat this as the root ESLint configuration
  root: true,

  // Define the environments where the code is intended to run
  env: {
    // Enable browser global variables
    browser: true,
    // Enable ES2021 globals and set parserOptions.ecmaVersion to 12
    es2021: true,
    // Enable Node.js global variables and Node.js scoping
    node: true,
  },

  // Extend various recommended configurations
  extends: [
    // Use ESLint's recommended rules as a starting point
    'eslint:recommended',
    // Use recommended TypeScript-specific rules
    'plugin:@typescript-eslint/recommended',
    // Use recommended rules for React
    'plugin:react/recommended',
    // Use recommended rules for React Hooks
    'plugin:react-hooks/recommended',
    // Use recommended accessibility rules for JSX
    'plugin:jsx-a11y/recommended',
    // Use recommended rules for imports
    'plugin:import/recommended',
    // Use import plugin for TypeScript support
    'plugin:import/typescript',
    // Use Jest-specific recommended rules
    'plugin:jest/recommended',
    // Use Testing Library's recommended rules for React
    'plugin:testing-library/react',
    // Use Playwright-specific recommended rules
    'plugin:playwright/playwright-test',
    // Use Prettier's recommended rules (should be last)
    'plugin:prettier/recommended',
  ],

  // The 'plugins' array lists additional ESLint plugins to use
  plugins: [
    // Specify ESLint plugins related to React
    'react',
    // Specify ESLint plugins for TypeScript
    '@typescript-eslint',
    // Specify ESLint plugins for imports
    'import',
    // Specify ESLint plugins for accessibility in JSX
    'jsx-a11y',
    // Specify ESLint plugins for React Hooks
    'react-hooks',
    // Specify ESLint plugins for Testing Library
    'testing-library',
    // Specify ESLint plugins for Jest
    'jest',
    // Specify ESLint plugins for Playwright
    'playwright',
  ],

  // The 'settings' object is used to configure plugins
  settings: {
    // Automatically detect the React version
    react: {
      version: 'detect',
    },
    // Use TypeScript and Node.js resolvers for import plugin
    'import/resolver': {
      typescript: {},
      node: {
        // Resolve these extensions for Node.js
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  // The 'rules' object allows custom configuration of rules
  rules: {
    // Disable the rule requiring React to be in scope (not needed with new JSX transform)
    'react/react-in-jsx-scope': 'off',
    // Disable prop-types as we're using TypeScript
    'react/prop-types': 'off',
    // Enforce import order
    'import/order': [
      'error',
      {
        // Define the order of import groups
        groups: [
          'builtin', // Node.js built-in modules
          'external', // npm packages
          'internal', // Internal modules
          'parent', // Parent directory imports
          'sibling', // Same directory imports
          'index', // Index imports
          'object', // Object imports
          'type', // Type imports
        ],
        // Add new lines between import groups
        'newlines-between': 'always',
        // Sort imports alphabetically within each group
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    // Enforce no duplicate imports
    'import/no-duplicates': 'error',

    // Set non used vars to warning
    '@typescript-eslint/no-unused-vars': 'warn',
  },

  // The 'parserOptions' object configures the parser for TypeScript
  parserOptions: {
    // Enable JSX parsing
    ecmaFeatures: {
      jsx: true,
    },
    // Use the latest ECMAScript version
    ecmaVersion: 'latest',
    // Treat source files as ECMAScript modules
    sourceType: 'module',
  },
}
