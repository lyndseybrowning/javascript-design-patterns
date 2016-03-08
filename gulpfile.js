'use strict';

const gulp = require('gulp');
const esLint = require('gulp-eslint');
const babel = require('gulp-babel');

const paths = {
  build: 'build/',
  js: 'src/**/*.js'
};

gulp.task('script', function() {
  return gulp
    .src(paths.js)
    .pipe(esLint())
    .pipe(esLint.format())
    .pipe(babel())
    .pipe(gulp.dest(paths.build))
});

gulp.task('default', ['script'], () => {
  gulp.watch(paths.js, ['script']);
});
