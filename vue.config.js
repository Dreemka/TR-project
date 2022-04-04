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
    //     target: 'https://dev0skks.etalongroup.com/',
    //   },
    //   "/auth": {
    //     target: 'https://dev0skks.etalongroup.com/',
    //   }
    // }
    proxy: {
      '/api': {
        target: 'https://dev0api.transporter.geekchain.dev/',
      },
      "/auth": {
        target: 'https://dev0api.transporter.geekchain.dev/',
      },
    }
  }
}