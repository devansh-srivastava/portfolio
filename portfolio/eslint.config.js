import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react,
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // Mark variables used in JSX as used (fixes React component detection)
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      // Allow 'motion' specifically as it's used as motion.div in JSX
      // Also allow variables starting with uppercase (React components)
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^(motion|_|[A-Z])',
        argsIgnorePattern: '^_'
      }],
    },
  },
])
