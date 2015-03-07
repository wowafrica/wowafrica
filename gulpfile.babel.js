"use strict";

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

import App         from './lib/App';
import RouteAction from './lib/actions/RouteAction';
import React       from 'react';

let app        = express();
let build_path = './_public';
let production = false;

if (gutil.env.env === 'production') {
  production = true;
}

gulp.task('jade', () => {
  return gulp.src('./client/index.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(build_path))
    .pipe(livereload());
});

gulp.task('images', () => {
  return gulp.src('./client/images/*')
    .pipe(gulp.dest(`${build_path}/images/`))
    .pipe(livereload());
});

gulp.task('data', () => {
  return gulp.src('./client/data/*')
    .pipe(gulp.dest(`${build_path}/data/`))
    .pipe(livereload());
});

gulp.task('css', () => {
  return gulp.src('./client/styles/*.css')
    .pipe(gulp.dest(`${build_path}/styles/`))
    .pipe(livereload());
});

gulp.task('transpile', () => {
  return gulp.src('./src/**/*')
    .pipe(gbabel({experimental: true}))
    .pipe(gulp.dest('./lib/'));
});

gulp.task('browserify', () => {
  return browserify('./client/scripts/index.js')
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulpif(production, buffer()))
    .pipe(gulpif(production, uglify()))
    .pipe(gulp.dest(`${build_path}/scripts/`))
    .pipe(livereload());
});

gulp.task('server', (done) => {
  app.use(liveConnect());
  app.use(express.static(path.resolve(build_path)));
  app.all('*', (req, res) => {
    RouteAction.updatePath(req.url);
    let html = React.renderToString(<App/>);
    res.write(`
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <title>Explore Africa</title>
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
  gulp.watch('./client/*.jade', 'jade');
  gulp.watch('./client/styles/*.css', 'css');
  gulp.watch('./client/scripts/**/*', 'browserify');
  gulp.watch('./src/**/*', gulp.series('transpile', 'browserify'));
  done();
});

gulp.task('bundle', gulp.series('transpile', 'browserify'));
gulp.task('build', gulp.parallel('jade', 'css', 'bundle'));
gulp.task('dev', gulp.series('build', 'server','watch'));
gulp.task('default', gulp.parallel('build'));
