import { createServer as createViteDevServer, ViteDevServer } from 'vite'

export const createDevServer = async (root = process.cwd()) => {
    return createViteDevServer({
        root
    })
}