const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/js/index.js'),
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
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
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.scss$/,
        use:extractTextPlugin.extract({
          // ['style-loader','css-loader']
          fallback: 'style-loader',
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.less$/,
        use:extractTextPlugin.extract({
          // ['style-loader','css-loader']
          fallback: 'style-loader',
          use: ["css-loader", {
            loader: 'less-loader',
            options: {
              noIeCompat: true
            }
          }]
        })
      },
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.styl$/,
        use:extractTextPlugin.extract({
          // ['style-loader','css-loader']
          fallback: 'style-loader',
          use: [
            "css-loader",
            {
              loader: 'stylus-loader',
              options: {
                use: [
                  require('nib'),
                  require('rupture')
                ],
                import: [
                  '~nib/lib/nib/index.styl',
                  '~rupture/rupture/index.styl',
              ]
            }
          }]
        })
      }
    ]
  },
  plugins: [
    // aquí van los plugins
    new extractTextPlugin("css/[name].css")
  ]
}
