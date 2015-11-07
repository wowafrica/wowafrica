import gulp         from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import concat       from 'gulp-concat';
import gutil        from 'gulp-util';
import less         from 'gulp-less';
import livereload   from 'gulp-livereload';
import jade         from 'gulp-jade';
import plumber      from 'gulp-plumber';
import uglify       from 'gulp-uglify';
import gulpif       from 'gulp-if';
import shell        from 'gulp-shell';
import nodemon      from 'gulp-nodemon';

import del         from 'del';
import livereact   from 'livereactload';
import watchify    from 'watchify';

import source     from 'vinyl-source-stream';
import buffer     from 'vinyl-buffer';
import browserify from 'browserify';
import babelify   from 'babelify';

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

gulp.task('static-generator', shell.task(
  'babel-node server/staticGenerator.js'
));

gulp.task('jade', () => {
  return gulp.src('./client/views/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest(BUILD_PATH))
    .pipe(livereload());
});

gulp.task('ico', () => {
  return gulp.src('./client/views/*.ico')
    .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('images', () => {
  return gulp.src('./client/images/**/*')
    .pipe(gulp.dest(`${BUILD_PATH}/images/`));
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

let bundler = browserify('./client/scripts/index.js', {
  transform: [[babelify, {stage: 0}]],
  plugin: production ? [] : [livereact],
  debug: !production,
  fullPaths: !production
});

gulp.task('browserify', () => {
  return bundler
    .external(dependencies)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulpif(production, buffer()))
    .pipe(gulpif(production, uglify()))
    .pipe(gulp.dest(`${BUILD_PATH}/scripts/`));
});

gulp.task('watch-js', () => {
  let watcher = watchify(bundler);
  return watcher
    .on('error', gutil.log)
    .on('update', () => {
      gutil.log('Update JS bundle');
      watcher
        .external(dependencies)
        .bundle()
        .on('error', gutil.log)
        .pipe(source('bundle.js'))
        .pipe(gulpif(production, buffer()))
        .pipe(gulpif(production, uglify()))
        .pipe(gulp.dest(`${BUILD_PATH}/scripts/`));
    });
});

gulp.task('watch-server', () => {

  let serverIgnoreJS = [
    'node_modules/*',
    'client/*',
    'server/staticGenerator.js',
    'src/*',
    '_public/*',
    'gulpfile.babel.js',
    'karma.config.js'
  ];

  nodemon({
    script: 'server/server.js',
    ext: 'js',
    exec: 'babel-node',
    ignore: serverIgnoreJS
  }).on('change')
    .on('resatrt', () => {
      gutil.log('Server restarted');
    }
  );
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

gulp.task('watch', () => {
  livereload.listen({start: true});
  gulp.watch('./client/views/*.jade', ['jade']);
  gulp.watch('./client/styles/**/*', ['styles']);
  gulp.watch('./client/data/**/*', ['data']);
});

gulp.task('bundle', ['vendor', 'browserify-dependencies', 'browserify']);
gulp.task('build', ['jade', 'ico', 'data', 'images', 'styles', 'static-generator', 'bundle']);
gulp.task('dev', ['build', 'watch-server', 'watch', 'watch-js']);
gulp.task('default', ['build']);
