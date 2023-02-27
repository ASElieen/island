import { createServer as createViteDevServer, ViteDevServer } from 'vite'
import { pluginIndexHtml } from '../plugin-island/indexHTML'

export const createDevServer = async (root: string = process.cwd()): Promise<ViteDevServer> => {
    return createViteDevServer({
        root,
        plugins: [pluginIndexHtml()]
    })
}