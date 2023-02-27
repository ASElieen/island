import { readFile } from 'fs/promises'
import { Plugin } from 'vite'
import { DEFAULT_HTML_PATH, CLIENT_ENTRY_PATH } from '../node/constants'

export const pluginIndexHtml = (): Plugin => {
    return {
        name: 'island:index.html',
        //指名在build还是serve模式调用
        apply: 'serve',
        //配置devServer的钩子 添加自定义中间件
        configureServer(server) {
            //返回函数注入在内部中间件运行后运行的后置中间件
            return () => {
                server.middlewares.use(async (req, res, next) => {
                    let html = await readFile(DEFAULT_HTML_PATH, 'utf-8')
                    try {
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'text/html')
                        res.end(html)
                    } catch (error) {
                        return next(error)
                    }
                })
            }
        }
    }
}