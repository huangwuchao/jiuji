const path=require('path');


function resolve(dir){
    return path.join(__dirname,dir);
  }
  

module.exports={
    devServer: {
    
        proxy: {
          '/api': {
            target: 'https://m.9ji.com/web/api',
            ws: true,
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
              }
          }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': []
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: false
      }
    },
    chainWebpack(config){
      config.resolve.alias
      .set('components',resolve('./src/components'))
      .set('com',resolve('./src/components/commons'))
      .set('node',resolve('./node_modules'))
    }
}
