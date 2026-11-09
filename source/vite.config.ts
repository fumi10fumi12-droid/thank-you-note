import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwind from '@tailwindcss/vite';
import {VitePWA} from 'vite-plugin-pwa';
export default defineConfig({plugins:[react(),tailwind(),VitePWA({registerType:'prompt',includeAssets:['icon-192.png','icon-512.png'],manifest:{"id": "/", "name": "ありがとうの理由", "short_name": "ありがとうの理由", "lang": "ja", "start_url": "/", "scope": "/", "display": "standalone", "theme_color": "#182d42", "background_color": "#f7f7f2", "icons": [{"src": "/icon-192.png", "sizes": "192x192", "type": "image/png"}, {"src": "/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"}]},workbox:{globPatterns:['**/*.{js,css,html,png,svg,webmanifest}'],navigateFallback:'index.html'}})]});