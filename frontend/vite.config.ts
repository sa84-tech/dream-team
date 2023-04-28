import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        __API__: JSON.stringify('http://localhost:8000'),
    },
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
});
