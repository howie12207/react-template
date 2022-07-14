import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import { fileURLToPath, URL } from 'url';

export default ({ mode }) => {
    const env = process.env.VITE_ENV || mode;
    process.env = { ...process.env, ...loadEnv(env, process.cwd()) };

    return defineConfig({
        plugins: [react()],
        base: process.env.VITE_BASE_URL,
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    });
};

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
//     base: process.env.VITE_BASE_URL,
//     resolve: {
//         alias: {
//             '@': fileURLToPath(new URL('./src', import.meta.url))
//         }
//     }
// });
