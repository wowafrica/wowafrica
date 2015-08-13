module.exports = function(config) {

  config.set({
    basePath: '',
    autoWatch: true,
    singleRun: true,

    frameworks: ['jasmine', 'browserify'],

    files: ['tests/**/*.js'],

    browsers: ['PhantomJS'],

    preprocessors: {
      'tests/**/*.js': ['browserify']
    },

    browserify: {
      transform: [['babelify', {'stage': 0}], 'browserify-istanbul'],
      extensions: ['js'],
      debug: true,
      bundleDelay: 1000
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
