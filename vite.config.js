import { defineConfig } from 'vite';

export default defineConfig({
  base: '/coca/',   
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        products: 'products.html'
      }
    }
  }
});