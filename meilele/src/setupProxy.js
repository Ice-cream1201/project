const proxy = require('http-proxy-middleware')


module.exports = (app)=>{
    app.use('/api',proxy({
        target: 'http://m.meilele.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api' : '/'
        },
        secure: false // https请求变成true
    }))
}