'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var jest = require('gulp-jest');
var colors = require('colors');

require("harmonize")();

var browserifyErrorHandler = function(error) {
  console.error("\n");
  console.error('------------------------------------------------------------------------'.red);
  console.error('An error has come at Browserify Process...'.red);
  console.error(error.message.red);
  console.error('------------------------------------------------------------------------'.red);
};

gulp.task('browserify', function() {
  var b = browserify({
    entries: ['./src/main.jsx'],
    transform: [reactify]
  });

  return b.bundle()
         .on('error', browserifyErrorHandler)
         .pipe(source('simple-timer.js'))
         .pipe(gulp.dest('./build'));
});

gulp.task('jest', function() {
  return gulp.src('src')
         .pipe(plumber())
         .pipe(jest({
           scriptPreprocessor: "../preprocessor.js",
           unmockedModulePathPatterns: [
             "node_modules/react"
           ],
           testDirectoryName: "__tests__",
           testPathIgnorePatterns: [
             "node_modules"
           ],
           moduleFileExtensions: [
             "js",
             "json",
             "react"
           ]
         }));
});


gulp.task('watch', function() {
  gulp.watch([
    './src/**/*.jsx',
    './src/**/*.js'
  ], [
    'jest',
    'browserify'
  ]);
});

gulp.task('default', ['browserify']);
