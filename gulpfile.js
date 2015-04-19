'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var jest = require('gulp-jest');

require("harmonize")();

gulp.task('browserify', function() {
  var b = browserify({
    entries: ['./src/main.jsx'],
    transform: [reactify]
  });

  return b.bundle()
         .pipe(source('simple-timer.js'))
         .pipe(gulp.dest('./build'));
});

gulp.task('jest', function() {
  return gulp.src('src')
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
  gulp.watch('./src/**/*.jsx', ['jest', 'browserify']);
});

gulp.task('default', ['browserify']);
