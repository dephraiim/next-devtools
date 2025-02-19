import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],

  dts: true,

  clean: true,

  format: ['cjs', 'esm'],

  external: [
    'next',
    'react',
  ],
})
