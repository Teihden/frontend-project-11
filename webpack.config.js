// Generated using webpack-cli https://github.com/webpack/webpack-cli

import path from 'path';
import url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/js/index.js',
  output: {
    clean: true,
    path: path.resolve(dirname, 'dist'),
    filename: 'index.js',
  },
  devServer: {
    open: false,
    host: 'localhost',
    static: path.resolve(dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      scriptLoading: 'module',
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      // {
      //   test: /\.(js|mjs)$/i,
      //   exclude: /node_modules/,
      // },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|ttf|otf|woff2?|png|jpe?g|gif|webp|avif|svg)$/i,
        type: 'asset',
      },
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

export default config;
