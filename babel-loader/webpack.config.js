const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      //Aquí van los loaders
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.js$/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use:extractTextPlugin.extract({
          // ['style-loader','css-loader']
          fallback: 'style-loader',
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    // aquí van los plugins
    new extractTextPlugin("css/[name].css")
  ]
}
