import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@styles/functions.scss' as *;`,
      },
    },
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase',
      generateScopedName: '[local]___[hash:base64:5]',
    },
  },
  plugins: [react()],
})
