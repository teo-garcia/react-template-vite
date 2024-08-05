module.exports = {
  // Treat this as the root ESLint configuration
  root: true,

  // Define the environments where the code is intended to run
  env: {
    browser: true, // Enable browser global variables
    es2021: true, // Enable ES2021 globals and set parserOptions.ecmaVersion to 12
    node: true, // Enable Node.js global variables and Node.js scoping
  },

  // Extend various recommended configurations
  extends: [
    // ESLint recommended rules
    'eslint:recommended',
    // TypeScript recommended rules
    'plugin:@typescript-eslint/recommended',
    // React recommended rules
    'plugin:react/recommended',
    // React Hooks recommended rules
    'plugin:react-hooks/recommended',
    // Accessibility rules for JSX
    'plugin:jsx-a11y/recommended',
    // Recommended import rules
    'plugin:import/recommended',
    // TypeScript support for import rules
    'plugin:import/typescript',
    // Jest recommended rules
    'plugin:jest/recommended',
    // Testing Library's recommended rules for React
    'plugin:testing-library/react',
    // Playwright's recommended rules
    'plugin:playwright/playwright-test',
    // Prettier's recommended rules (should be last)
    'plugin:prettier/recommended',
  ],

  // The 'plugins' array lists additional ESLint plugins to use
  plugins: ['import'],

  // The 'rules' object allows custom configuration of rules
  rules: {
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
  },

  // The 'settings' object is used to configure plugins
  settings: {
    'import/resolver': {
      // Use TypeScript resolver for import plugin
      typescript: {},
    },
  },
  // Specify the parser for TypeScript
  parser: '@typescript-eslint/parser',

  // Parser options
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
    ecmaVersion: 'latest', // Use the latest ECMAScript version
    sourceType: 'module', // Treat source files as ECMAScript modules
  },

  // List of ESLint plugins to use
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'react-hooks',
    'testing-library',
    'jest',
    'playwright',
  ],

  // Settings for various plugins
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
    'import/resolver': {
      typescript: {}, // Use TypeScript resolver for import plugin
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve these extensions
      },
    },
  },

  // ESLint rules
  rules: {
    // Disable the rule requiring React to be in scope (not needed with new JSX transform)
    'react/react-in-jsx-scope': 'off',
    // Disable prop-types as we're using TypeScript
    'react/prop-types': 'off',
    // Configure import sorting
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    // Prevent duplicate imports
    'import/no-duplicates': 'error',
  },
}
