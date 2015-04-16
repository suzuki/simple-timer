'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');


gulp.task('browserify', function() {
  var b = browserify({
    entries: ['./src/main.jsx'],
    transform: [reactify]
  });

  return b.bundle()
         .pipe(source('simple-timer.js'))
         .pipe(gulp.dest('./build'));
});

gulp.task('default', ['browserify']);
