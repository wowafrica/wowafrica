import path              from 'path';
import webpack           from 'webpack';
import babelConfig       from './babel.config.prod';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer      from 'autoprefixer';

export default {
  devtool: 'source-map',
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        BROWSER: JSON.stringify(true)
      }
    // }),
    // This is some problem when use css modules, so I use uglify-loader
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: {
    //     warnings: false
    //   },
    //   mangle: {
    //     except: ['$super', '$', 'exports', 'require']
    //   }
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      include: [
        path.join(__dirname, '../src'),
        path.join(__dirname, '../client/scripts')
      ],
      loader: 'uglify!babel?presets[]=es2015,presets[]=react,presets[]=stage-0,-babelrc'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!postcss-loader!less-loader')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&minimize&-autoprefixer!postcss-loader')
    }, {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
      loader: 'url-loader?limit=30000&name=../styles/[name]-[hash].[ext]'
    }]
  },
  postcss: function() {
    return [autoprefixer()];
  },
  node: {
    fs: 'empty'
  }
};