import react from '@vitejs/plugin-react'
import Checker from 'vite-plugin-checker'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
const config = () => ({
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@emotion',
            {
              importMap: {
                '@mui/material': {
                  styled: {
                    canonicalImport: ['@emotion/styled', 'default'],
                    styledBaseImport: ['@mui/material', 'styled']
                  }
                },
                '@mui/material/styles': {
                  styled: {
                    canonicalImport: ['@emotion/styled', 'default'],
                    styledBaseImport: ['@mui/material/styles', 'styled']
                  }
                }
              }
            }
          ]
        ]
      }
    }),
    Checker({
      typescript: true,
      overlay: true,
      eslint: {
        files: 'src',
        extensions: ['.ts', '.tsx']
      }
    })
  ]
})

export default config
