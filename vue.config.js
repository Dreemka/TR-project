module.exports = {
  devServer: {
    headers: {
      'Accept': 'application/json',
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    // proxy: {
    //   '/api': {
    //     target: 'https://dev0transporter.etalongroup.com/',
    //   },
    //   "/auth": {
    //     target: 'https://dev0transporter.etalongroup.com/',
    //   }
    // }
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
}