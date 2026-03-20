import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: '.',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                zoo: resolve(__dirname, 'zoo.html'),
            },
        },
    },
    server: {
        port: 3000,
        open: true,
        watch: {
            usePolling: true,
        },
    },
    base: '/',
})