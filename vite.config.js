import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: 'localhost',  // 启动后浏览器窗口输入地址就可以进行访问
    port: 8081, // 端口号
    open: true, //是否自动打开浏览器
    cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
    https: false, //是否支持http2 如果配置成true 会打开https://localhost:8080;
    strictPort: true, //严格的端口号，如果true，端口号被占用时会直接退出
    hmr: true, // 开启热更新
    proxy: {
      '/proxy/api/': {
        target: 'http://127.0.0.1:8080', // 你的后端服务地址
        changeOrigin: true, // 是否改变请求的源
        rewrite: path => path.replace(/^\/proxy\/api/, '') // 重写路径
      }
    }
  }
});