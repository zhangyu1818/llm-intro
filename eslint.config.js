import { fixupConfigRules } from '@eslint/compat'
import { defineConfig } from '@zhangyu1818/eslint-config'

export default fixupConfigRules(await defineConfig({
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
}))
