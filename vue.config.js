module.exports = {
    devServer : {
        proxy : {
            '/a' : {
                target : 'https://web-api.juejin.im',
                changeOrigin : true,
                secure: false,
                pathRewrite: {
                    '^/a' : ''
                }
            },
            '/img' : {
                target : 'https://user-gold-cdn.xitu.io',
                changeOrigin : true,
                secure: false,
                pathRewrite: {
                    '^/img' : ''
                }
            }
        }
    }
}