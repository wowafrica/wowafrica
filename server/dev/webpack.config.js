import path         from 'path';
import webpack      from 'webpack';
import babelConfig  from './babel.config.client';
import autoprefixer from 'autoprefixer';

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: path.join(__dirname, '../../client/scripts/index'),
    vendor: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      'd3',
      'flux',
      'routr',
      'react',
      'react-dom',
      'superagent'
    ]
  },
  output: {
    path: path.join(__dirname, '../../_public/scripts'),
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(true)
      }
    }),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      include: [
        path.join(__dirname, '../../src'),
        path.join(__dirname, '../../client/scripts')
      ],
      loader: 'babel',
      query: babelConfig
    }, {
      test: /\.css$/,
      include: [
        path.join(__dirname, '../../client/styles')
      ],
      loader: 'style!css!postcss'
    }, {
      test: /\.css$/,
      include: [
        path.join(__dirname, '../../src')
      ],
      loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
    }, {
      // semantic-ui cannot use DataUrl, I don't know why..
      // so set limit 1kb to prevent use DataUrl on semantic-ui
      //
      // url-loader bug? should use ./ path to find the resource...
      // Maybe because use the inline css file in development
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=1000&name=./styles/[name]-[hash].[ext]'
    }]
  },
  postcss: function() {
    return [autoprefixer()];
  },
  node: {
    fs: 'empty'
  }
};
