const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')
const portfinder = require('portfinder')
const path = require('path')
const webpack = require('webpack')

portfinder.basePort = 8080;
module.exports = portfinder.getPortPromise().then(port=>{
    return merge(webpackConfig,{
        mode:'development',
        devtool:'cheap-module-eval-source-map',
        module:{
            rules:[
                {
                    
                test:/\.(css|less)$/,
                use:[{
                    loader:'style-loader'
                   
                },'css-loader','postcss-loader','less-loader']
                    
                }
            ]
        },
        plugins:[
            new webpack.DefinePlugin({
                'process.env.baseURL':JSON.stringify('.')
            })
        ],
     
        devServer:{
            host:'localhost',
            headers:{
                "Access-Control-Allow-Origin":"*"
            },
            hot:true,
            port:port,
            historyApiFallback:true,
            open:true,
            contentBase:path.resolve(__dirname,'../public')
    
        }
    })
})
