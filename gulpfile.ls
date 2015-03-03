require! <[gulp gulp-util gulp-livereload gulp-jade gulp-plumber gulp-uglify gulp-if]>
require! <[express connect-livereload path]>
require! <[vinyl-source-stream vinyl-buffer]>
require! <[browserify babelify]>

require! {
  child_process: {exec}
}

app        = express!
build_path = '_public'

buffer     = vinyl-buffer
gutil      = gulp-util
gulpif     = gulp-if
livereload = gulp-livereload
source     = vinyl-source-stream
uglify     = gulp-uglify

production = true if gutil.env.env is \production

gulp.task 'jade', ->
  gulp.src './client/index.jade'
    .pipe gulp-plumber!
    .pipe gulp-jade!
    .pipe gulp.dest "#{build_path}"
    .pipe livereload!

gulp.task 'images', ->
  gulp.src './client/images/*'
    .pipe gulp.dest "#{build_path}/images/"
    .pipe livereload!

gulp.task 'data', ->
  gulp.src './client/data/*'
    .pipe gulp.dest "#{build_path}/data/"
    .pipe livereload!

gulp.task 'css', ->
  gulp.src './client/styles/*.css'
    .pipe gulp.dest "#{build_path}/styles/"
    .pipe livereload!

gulp.task 'browserify', ->
  browserify './client/scripts/index.js'
    .transform babelify
    .bundle!
    .pipe source 'bundle.js'
    .pipe gulpif production, buffer!
    .pipe gulpif production, uglify!
    .pipe gulp.dest "#{build_path}/scripts/"
    .pipe livereload!

gulp.task 'server', ->
  exec 'npm run server', (err, stdout, stderr) ->
    if stdout != null
      gutil.log stdout
    else
      gutil.log stdout

gulp.task 'watch', ->
  livereload.listen!
  gulp.watch './client/index.jade', <[jade]>
  gulp.watch './client/data/*', <[data]>
  gulp.watch './client/styles/*.css', <[css]>
  gulp.watch './client/scripts/**/*', <[browserify]>
  gulp.watch './src/**/*', <[browserify]>

gulp.task 'build', <[jade browserify css]>
gulp.task 'dev', <[build server watch]>
gulp.task 'default', <[build]>
