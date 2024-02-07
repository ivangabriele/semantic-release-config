import commonjs from '@rollup/plugin-commonjs'
import inject from '@rollup/plugin-inject'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import { getAbsolutePath } from 'esm-path'
import path from 'path'

export default {
  input: './bin/semantic-release-config-monorepo.js',

  output: {
    file: './dist/semantic-release-config-monorepo.js',
    format: 'esm',
  },

  plugins: [
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    inject({
      navigator: getAbsolutePath(import.meta.url, './src/mocks/navigator.js'),
    }),
  ],
}
