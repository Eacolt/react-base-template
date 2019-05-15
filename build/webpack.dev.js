const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')

 
module.exports = merge(webpackConfig,{
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    module:{
        rules:[
            {
                
            test:/\.(css|less)$/,
            use:[{
                loader:'style-loader'
               
            },'css-loader','less-loader']
                
            }
        ]
    },
 
    devServer:{
        host:'localhost',
        hot:true,
        port:'8083',
        historyApiFallback:true,
        open:true,
        contentBase:'./dist'

    }
})