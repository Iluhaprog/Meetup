'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('sass', function(){
    return gulp.src("./src/**/**/**/*.scss")
           .pipe(sass().on('error', sass.logError))
           .pipe(cleanCSS({compatibility: 'ie8'}))
           .pipe(gulp.dest("./build/"));
});

gulp.task('watch', function(){
    gulp.watch("./src/**/**/*.scss", gulp.series('sass'));
});

gulp.task('html', function(){
    gulp.src('./src/index.html')
        .pipe(rigger())
        .pipe(gulp.dest('./build/'));
});

gulp.task('move-img', function(){
    gulp.src('./src/img/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));
});

gulp.task('fonts', function(){
    gulp.src("./src/fonts")
        .pipe(gulp.dest("./build/"));
});

gulp.task("js", function(){
    gulp.src("./src/js/main.js")
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest('build/js/'));
});