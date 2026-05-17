import { fixupConfigRules } from '@eslint/compat'
import { defineConfig } from '@zhangyu1818/eslint-config'

const base = await defineConfig({
  presets: {
    react: {
      options: {
        version: '19.2.5',
      },
    },
    typescript: {
      options: {
        packages: [
          {
            files: ['src/**/*.ts', 'src/**/*.tsx'],
            project: './tsconfig.app.json',
            tsconfigRootDir: import.meta.dirname,
          },
          {
            files: ['vite.config.ts'],
            project: './tsconfig.node.json',
            tsconfigRootDir: import.meta.dirname,
          },
        ],
      },
    },
  },
})

export default [
  ...fixupConfigRules(base),
  {
    rules: {
      'react/no-array-index-key': 'off',
    },
  },
  {
    files: ['src/**/*.i18n.tsx'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
]
