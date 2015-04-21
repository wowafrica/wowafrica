'use strict';

import gulp        from 'gulp';
import gutil       from 'gulp-util';
import livereload  from 'gulp-livereload';
import jade        from 'gulp-jade';
import plumber     from 'gulp-plumber';
import uglify      from 'gulp-uglify';
import gulpif      from 'gulp-if';

import express     from 'express';
import liveConnect from 'connect-livereload';
import path        from 'path';

import source      from 'vinyl-source-stream';
import buffer      from 'vinyl-buffer';
import browserify  from 'browserify';
import gbabel       from 'gulp-babel';
import babelify    from 'babelify';

import RouteStore from './lib/stores/RouteStore';
import React       from 'react';
require("babel/polyfill");

let app        = express();
let BUILD_PATH = './_public';
let production = false;

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

gulp.task('css', () => {
  return gulp.src('./client/styles/*.css')
    .pipe(gulp.dest(`${BUILD_PATH}/styles/`))
    .pipe(livereload());
});

gulp.task('transpile', () => {
  return gulp.src('./src/**/*')
    .pipe(gbabel({stage: 0}))
    .pipe(gulp.dest('./lib/'));
});

gulp.task('browserify', ['transpile'], () => {
  return browserify('./client/scripts/index.js')
    .transform(babelify)
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

    RouteStore.onReceviceUpdatePath(req.url);
    let {config} = RouteStore.getCurrentRoute();
    let CurrentPage = config['page'];
    let html = React.renderToString(<CurrentPage/>);
    res.write(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <title>Explore Africa</title>
    <link href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.6/semantic.min.css" type="text/css" rel="stylesheet"></link>
    <link href="styles/index.css" type="text/css" rel="stylesheet"></link>
  </head>
  <body>
    ${html}
    <script type="text/javascript" src="scripts/bundle.js"></script>
  </body>
</html>`);
    res.end();
  });
  app.listen(3000, () => {
    gutil.log('Listening on port 3000');
    done();
  });
});

gulp.task('watch', (done) => {
  livereload.listen({start: true});
  gulp.watch('./client/views/*.jade', ['jade']);
  gulp.watch('./client/styles/*.css', ['css']);
  gulp.watch('./client/scripts/**/*', ['browserify']);
  gulp.watch('./src/**/*', ['browserify']);
  done();
});

gulp.task('bundle', ['browserify']);
gulp.task('build', ['jade', 'css', 'bundle']);
gulp.task('dev', ['build', 'server', 'watch']);
gulp.task('default', ['build']);
