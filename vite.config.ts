import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      /**
       * 要搜索组件的目录的相对路径。
       * 默认是'src/components', 设置为空是不自动引入自己编写的组件，那样不方便点击command+点击跳转，且不能重名
       * 我只想使用自动导入ElementPlus的组件
       */
      dirs: '',
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    preprocessorOptions: {
      // scss: {
      //   additionalData: `@import "@/assets/theme/base.scss";`
      // }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
