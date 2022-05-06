module.exports = {
    devServer: {
        headers: {
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        },
        proxy: {
            '/api': {
                target: 'https://dev0api.transporter.geekchain.dev/',
            },
            "/auth": {
                target: 'https://dev0api.transporter.geekchain.dev/',
            },
        },
        disableHostCheck: true,
        port: 4001,
        public: 'localhost'
    },

    publicPath: "/",

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {

                const project = process.env.VUE_APP_PROJECT || 'transporter';
                process.env.VUE_APP_VERSION = require('./package.json').version;

                if (project === 'transporter') {
                    args[0].title = 'Transporter';
                    args[0].project = 'transporter';

                } else {
                    args[0].title = 'RuBim';
                    args[0].project = 'rubim';
                }

                return args
            })
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                @import "src/assets/css/common.scss";
                @import "src/assets/css/_${process.env.VUE_APP_PROJECT || 'transporter'}.scss";
                `
            }
        }
    }
}
