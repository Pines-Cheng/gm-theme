var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');

var lessSrc = "./src/theme.less";
var lessDest = "./gh-pages/assets/dist/";

gulp.task('less', function () {
    return gulp.src(lessSrc)
        .pipe(less())
        .pipe(gulp.dest(lessDest));
});

//废弃,jekyll serve 更好用.
gulp.task('connect', function() {
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('html', function () {
    gulp.src('./**/*.*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./**/*.*'], ['less']);
});

gulp.task('default', ['watch']);