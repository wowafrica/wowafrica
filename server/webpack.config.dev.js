import path        from 'path';
import webpack     from 'webpack';
import babelConfig from './babel.config.dev.client';

export default {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: path.join(__dirname, '../client/scripts/index'),
    vendor: [
      'jquery',
      'semantic-ui/dist/semantic.js',
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
    path: path.join(__dirname, '../_public/scripts'),
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/scripts/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
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
        path.join(__dirname, '../src'),
        path.join(__dirname, '../client/scripts')
      ],
      loader: 'babel',
      query: babelConfig
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=30000&name=../styles/[name]-[hash].[ext]'
    }]
  },
  node: {
    fs: 'empty'
  }
};
