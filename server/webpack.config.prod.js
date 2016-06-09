import path        from 'path';
import webpack     from 'webpack';
import babelConfig from './babel.config.prod';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  entry: {
    app: path.join(__dirname, '../client/scripts/index'),
    vendor: [
      'jquery',
      'semantic-ui/dist/semantic.js',
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
    new ExtractTextPlugin('../styles/main.css', {allChunks: true}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BROWSER: JSON.stringify(true)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=30000&name=../styles/[name]-[hash].[ext]'
    }]
  },
  node: {
    fs: 'empty'
  }
};
