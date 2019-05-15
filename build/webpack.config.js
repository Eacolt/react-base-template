 

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
 
const self = this;
module.exports = {
    entry:path.resolve(__dirname,'../src/main.jsx'),
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'js/[name].bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[{
                    loader:'babel-loader',
                   
                }],
                exclude:/node_modules/
            },
          
            {
                test:/\.(jpe?g|png|gif|svg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            outputPath:'img',
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:path.resolve(__dirname,'../public/index.html'),
            minify: {
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeComments: true
			}
        }),
       
        new webpack.ProvidePlugin({
            React:'react',
            ReactDom:'react-dom'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
        
       

    ]
  
}
