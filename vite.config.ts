import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

// https://vitejs.dev/config/
export default ({ command }: { command: string }) => {
  console.log('command:', command)
  return {
    resolve: {
      alias: [
        // {
        //   // /@/xxxx  =>  src/xxx
        //   find: /^~/,
        //   replacement: pathResolve('node_modules') + '/',
        // },
        {
          // /@/xxxx  =>  src/xxx
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },
    plugins: [reactRefresh()],
  }
}
