module.exports = {
    presets:[
        ['@babel/preset-env',{
           
              "useBuiltIns": "usage",
              "corejs":"2.6.5"
             
        }],
        '@babel/preset-react' 
    ]
}