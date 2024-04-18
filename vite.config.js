import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const { PORT = 3002 } = process.env;
const ASSET_URL = process.env.ASSET_URL || '';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: `http://localhost:${PORT}`,
                changeOrigin: true,
            },
        },
    },
    build: {
        outDir: 'dist',
    },
    base: `${ASSET_URL}/`,

});