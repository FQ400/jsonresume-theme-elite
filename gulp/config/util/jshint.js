'use strict';

const
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('jshint', function () {
  return gulp.src('src/js/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});
