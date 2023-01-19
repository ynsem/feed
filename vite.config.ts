import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from '@nabla/vite-plugin-eslint'
import { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
import { createHtmlPlugin } from 'vite-plugin-html'


const common = {
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
}

const plugins = [
  react({
    babel: {
      babelrc: true,
    },
  }),
  createHtmlPlugin()
]

export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      ...common,
      plugins: [
        splitVendorChunkPlugin(),
        viteCompression(),
        ...plugins,
      ],
    }
  }
  return {
    ...common,
    plugins: [eslintPlugin(), ...plugins],
  }
})
