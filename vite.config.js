import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiTarget = env.VITE_API_URL || 'http://localhost:5000'

  // client.js always calls the frontend's own origin (see its comment for
  // why) — this proxy is what makes that resolve correctly in dev, the same
  // way vercel.json's rewrites do it in production.
  const proxyTarget = {
    target: apiTarget,
    changeOrigin: true,
    secure: true,
    cookieDomainRewrite: 'localhost',
  }

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: process.env.PORT ? Number(process.env.PORT) : 5173,
      strictPort: true,
      proxy: {
        '/Api': proxyTarget,
        '/Product': proxyTarget,
        '/Order': proxyTarget,
        '/Address': proxyTarget,
        '/Wishlist': proxyTarget,
        '/Review': proxyTarget,
        '/Blog': proxyTarget,
        '/Newsletter': proxyTarget,
      },
    },
  }
})
