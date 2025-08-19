import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import vitest from '@vitest/eslint-plugin';

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
  globalIgnores(['dist', 'eslint.config.mjs']),
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      js,
      tseslint,
    },
  },
  {
    files: ['**/*.test.{ts,tsx}'],
    plugins: {
      js,
      tseslint,
      vitest,
    },
    rules: {
        ...vitest.configs.recommended.rules,
    },
  }
)
