module.exports = function(config) {

  config.set({
    basePath: '',
    autoWatch: true,
    singleRun: true,

    frameworks: ['jasmine'],

    files: ['tests/**/*.spec.js'],

    browsers: ['PhantomJS'],

    preprocessors: {
      'tests/**/*.js': ['webpack']
    },

    webpack: {
      module: {
        // For coverage, use isparta as the instrumenter
        preLoaders: [{
          test: /(\.jsx)|(\.js)$/,
          exclude: /(node_modules|tests)/,
          loader: 'isparta-instrumenter',
          query: {
            babel: {presets: ['es2015', 'react', 'stage-0']}
          }
        }],
        // Transpile by babel
        loaders: [{
          test: /(\.jsx)|(\.js)$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }]
      },
      node: {
        fs: 'empty'
      }
    },

    webpackMiddleware: {
      stats: {
        // With console colors
        colors: true,
        // add the hash of the compilation
        timings: false,
        // add assets information
        assets: false,
        // add chunk information
        chunks: false,
        // add built modules information to chunk information
        chunkModules: false,
        // add built modules information
        modules: false
      }
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      reporters: [{
        type: 'text-summary',
        subdir: normalizeBrowserName
      }, {
        type: 'html',
        dir: 'coverage/',
        subdir: normalizeBrowserName
      }, {
        type: 'lcov',
        dir: 'coverage/',
        subdir: normalizeBrowserName
      }]
    }
  });

  function normalizeBrowserName(browser) {
    return browser.toLowerCase().split(/[ /-]/)[0];
  }
};
