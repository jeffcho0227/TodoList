const path = require('path');
const combinedLoaders = require('webpack-combine-loaders');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './client/src/index.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './client/dist'), 
        publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }, 
        {
          test: /\.(s*)css$/,
          loader: combinedLoaders([
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader', 
              query: {
                modules: true, 
                localIdentName: '[name]__[loader]__[hash:base64:5]'
              }
            },{
              loader: "sass-loader",
               // compiles Sass to CSS
            }
          ])
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true, // webpack@1.x
                disable: true, // webpack@2.x and newer
              },
            },
          ],
        }
      ]
    }, 
    devServer: {
      historyApiFallback: true,
    }
  };