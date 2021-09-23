import reactRefresh from '@vitejs/plugin-react-refresh'
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
    reactRefresh(),
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
