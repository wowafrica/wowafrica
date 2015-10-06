import gulp         from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import concat       from 'gulp-concat';
import gutil        from 'gulp-util';
import livereload   from 'gulp-livereload';
import less         from 'gulp-less';
import jade         from 'gulp-jade';
import plumber      from 'gulp-plumber';
import uglify       from 'gulp-uglify';
import gulpif       from 'gulp-if';

import del         from 'del';
import express     from 'express';
import liveConnect from 'connect-livereload';
import path        from 'path';

import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import browserify from 'browserify';
import babelify   from 'babelify';

import RouteStore from './src/stores/RouteStore';
import React      from 'react';

let app        = express();
let BUILD_PATH = './_public';
let production = false;

let vendor = [
  'bower_components/jquery/dist/jquery.js',
  'bower_components/fullpage/jquery.fullpage.js',
  'bower_components/semantic-ui/dist/semantic.js',
  'client/vendor/elevator.min.js'
];

let dependencies = [
  'babel/polyfill',
  'd3',
  'flux',
  'routr',
  'react',
  'superagent'
];

if (gutil.env.env === 'production') {
  production = true;
}

gulp.task('jade', () => {
  return gulp.src('./client/views/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(BUILD_PATH))
    .pipe(livereload());
});

gulp.task('images', () => {
  return gulp.src('./client/images/*')
    .pipe(gulp.dest(`${BUILD_PATH}/images/`))
    .pipe(livereload());
});

gulp.task('data', () => {
  return gulp.src('./client/data/*')
    .pipe(gulp.dest(`${BUILD_PATH}/data/`))
    .pipe(livereload());
});

gulp.task('styles-config', () => {
  return gulp.src('./client/styles/theme.config')
    .pipe(gulp.dest('./bower_components/semantic-ui/src/'));
});

gulp.task('styles-assets', () => {
  return gulp.src('./bower_components/semantic-ui/src/themes/default/assets/**/*')
    .pipe(gulp.dest(`${BUILD_PATH}/themes/default/assets/`));
});

gulp.task('styles', ['styles-config', 'styles-assets'], () => {
  return gulp.src('./client/styles/main.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest(`${BUILD_PATH}/styles/`))
    .pipe(livereload());
});

gulp.task('vendor', () => {
  return gulp.src(vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulpif(production, uglify()))
    .pipe(gulp.dest(`${BUILD_PATH}/scripts/`));
});

gulp.task('browserify-dependencies', () => {
  return browserify()
    .require(dependencies)
    .bundle()
    .pipe(source('vendor.bundle.js'))
    .pipe(gulpif(production, buffer()))
    .pipe(gulpif(production, uglify()))
    .pipe(gulp.dest(`${BUILD_PATH}/scripts/`));
});

gulp.task('browserify', () => {
  return browserify('./client/scripts/index.js')
    .external(dependencies)
    .transform(babelify.configure({stage: 0}))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulpif(production, buffer()))
    .pipe(gulpif(production, uglify()))
    .pipe(gulp.dest(`${BUILD_PATH}/scripts/`))
    .pipe(livereload());
});

gulp.task('server', (done) => {
  app.use(liveConnect());
  app.use(express.static(path.resolve(BUILD_PATH)));
  app.all('*', (req, res) => {
    gutil.log('URL: ', gutil.colors.yellow(req.url));

    RouteStore.onReceiveUpdatePath(req.url);
    let currentRoute = RouteStore.getCurrentRoute();
    let html = '';
    if (currentRoute) {
      let CurrentPage = currentRoute.config['page'];
      html = React.renderToString(<CurrentPage/>);
    }
    res.write(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <title>Explore Africa</title>
    <link href="/styles/main.css" type="text/css" rel="stylesheet"></link>
  </head>
  <body>
    <div id="content">${html}</div>
    <div id="nation_modal" class="ui dimmer modals page"></div>
    <script type="text/javascript" src="/scripts/vendor.js"></script>
    <script type="text/javascript" src="/scripts/vendor.bundle.js"></script>
    <script type="text/javascript" src="/scripts/bundle.js"></script>
  </body>
</html>`);
    res.end();
  });
  app.listen(3000, () => {
    gutil.log('Listening on port 3000');
    done();
  });
});

gulp.task('clean-build', () => {
  return del(BUILD_PATH);
});

gulp.task('clean-all', ['clean-build'], () => {
  return del([
    'bower_components',
    'coverage',
    'node_modules'
  ]);
});

gulp.task('watch', (done) => {
  livereload.listen({start: true});
  gulp.watch('./client/views/*.jade', ['jade']);
  gulp.watch('./client/styles/**/*', ['styles']);
  gulp.watch('./client/data/**/*', ['data']);
  gulp.watch('./client/scripts/**/*', ['browserify']);
  gulp.watch('./src/**/*', ['browserify']);
  done();
});

gulp.task('bundle', ['vendor', 'browserify-dependencies', 'browserify']);
gulp.task('build', ['jade', 'data', 'images', 'styles', 'bundle']);
gulp.task('dev', ['build', 'server', 'watch']);
gulp.task('default', ['build']);
