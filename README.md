# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and ESLint.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## ESLint

项目使用 `eslint.config.js` 和 `@zhangyu1818/eslint-config`。

```js
import { fixupConfigRules } from '@eslint/compat'
import { defineConfig } from '@zhangyu1818/eslint-config'

export default fixupConfigRules(await defineConfig({
  presets: {
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
    react: {
      options: {
        version: '19.2.5',
      },
    },
  },
}))
```

常用命令：

```bash
pnpm lint
pnpm lint:fix
```
