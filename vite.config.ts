import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import type { IncomingMessage, ServerResponse } from 'node:http'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      {
        name: 'health-check',
        configureServer(server) {
          server.middlewares.use('/health', (_req: IncomingMessage, res: ServerResponse) => {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ status: 'ok', project: 'ricoh-international-investor-landing' }))
          })
        },
      },
    ],
    server: {
      host: true,
      port: env.DEV_PORT ? parseInt(env.DEV_PORT) : undefined,
    },
  }
})
