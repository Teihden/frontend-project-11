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
    hot: true,
    static: path.resolve(dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      scriptLoading: 'module',
      favicon: './src/assets/favicon.ico',
    }),
  ],
  module: {
    rules: [
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
    ],
  },
};

export default config;
