'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const minifyjs = require('gulp-js-minify');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');

// const clean = require('gulp-clean');
// const imagemin = require('gulp-imagemin');
// const pngquant = require('imagemin-pngquant');

gulp.task('sass', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch(['./src/scss/scss-320/*.scss', './src/scss/*.scss'], ['sass']);
});
// gulp.task('server', function () {
//     browserSync.init({
//         server: './'
//     })
//     gulp.watch('./*.js', [uglify]);
//     gulp.watch('./index.html').on('change', browserSync.reload);
// });

// gulp.task('minify-js', function () {
//     gulp.src('./dist/a.js')
//         .pipe(minifyjs())
//         .pipe(gulp.dest('./dist/'));
// });

// gulp.task('minify-css', () => {
//     return gulp.src('styles/*.css')
//         .pipe(cleanCSS({
//             compatibility: 'ie8'
//         }))
//         .pipe(gulp.dest('dist'));
// });

// gulp.task("uglify", function () {
//     return gulp.src("lib/bundle.js")
//         .pipe(rename("bundle.min.js"))
//         .pipe(uglify( /* options */ ))
//         .pipe(gulp.dest("lib/"));
// });


// gulp.task('clean', function(){
//     gulp.src('build', {read: false})

// });

// gulp.task('minify-css', () => {
//     return gulp.src('styles/*.css')
//         .pipe(cleanCSS({
//             compatibility: 'ie8'
//         }))
//         .pipe(gulp.dest('dist'));
// });

// gulp.task('default', function () {
//     return gulp.src('app/tmp', {
//             read: false
//         })
//         .pipe(clean());
// });

// gulp.task('scripts', function() {
//     return gulp.src('./lib/*.js')
//       .pipe(concat('all.js'))
//       .pipe(gulp.dest('./dist/'));
//   });

//   gulp.task('default', () =>
//     gulp.src('src/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist/images'))
// );

// gulp.task('default', () =>
//     gulp.src('src/app.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('dist'))
// );

gulp.task('default', ['server']);