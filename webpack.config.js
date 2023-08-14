import path from 'path';
import url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const config = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    index: './src/js/index.js',
  },
  output: {
    clean: true,
    path: path.resolve(dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    open: false,
    host: 'localhost',
    hot: true,
    static: path.resolve(dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      scriptLoading: 'module',
      favicon: './src/assets/favicon.ico',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(eot|ttf|otf|woff2?|png|jpe?g|gif|webp|avif|svg)$/i,
        type: 'asset',
      },
    ],
  },
};

export default config;
