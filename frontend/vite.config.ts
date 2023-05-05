import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
        plugins: [react(), svgr({ exportAsDefault: true })],
        define: {
            __API__: JSON.stringify(env.API_URL || 'http://localhost:8000'),
            __IS_DEV__: JSON.stringify(env.DEBUG || true),
        },
        resolve: {
            alias: [{ find: '@', replacement: '/src' }],
        },
    };
});
