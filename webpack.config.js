const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const APP_PATH = './src/dev';

const config = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    library: 'default',
    libraryTarget: 'umd'
  },

  resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  plugins: [],

  optimization: {
    minimize: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'async',
      minSize: 1000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.entry = path.resolve(__dirname, APP_PATH);
    config.plugins.push(
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(APP_PATH, 'index.html')
      })
    );
  } else {
    config.entry = path.resolve(__dirname, APP_PATH);
    config.plugins.push(
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })
    );

    config.plugins.push(
      new HtmlWebpackPlugin({
        template: path.join(APP_PATH, 'index.html')
      })
    );
  }

  return config;
};
