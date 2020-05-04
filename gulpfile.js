'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require("path");
var server = require("browser-sync");

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task("default", ["sass"], function() {
  server.init({
    server: "."
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch("*.html")
  .on("change", server.reload);
});
