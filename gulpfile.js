'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['nodemon']);

gulp.task('babel-transpile', function(){
  return gulp.src('app/**/*.js')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('build'));
});

gulp.task('lint', function(){
  return gulp.src(['./app/**/*.js', './gulpfile.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('nodemon', ['lint', 'babel-transpile'], function(){
  return nodemon({
    script: './build/app.js',
    watch: ['./app'],
    ext: 'html, css, js',
    tasks: ['lint', 'babel-transpile']
  });
});