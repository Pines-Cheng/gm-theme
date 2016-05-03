var gulp = require('gulp');
var path = require('path');

var $ = require('gulp-load-plugins')();
var pkg = require('./package.json');

var config = {
    path: {
        less: "./less/bootstrap.less"
    },
    AUTOPREFIXER_BROWSERS: [
        'ie >= 8',
        'ie_mob >= 10',
        'ff >= 30',
        'chrome >= 34',
        'safari >= 7',
        'opera >= 23',
        'ios >= 7',
        'android >= 2.3',
        'bb >= 10'
    ],
    dist: {
        css: "./dist/css",
        docDist: "./gh-pages/assets/dist/"
    }
};

var dateFormat = 'isoDateTime';

var banner = [
    '/*! <%= pkg.title %> v<%= pkg.version %><%=ver%>',
    'by GuanMai UI Team',
    '(c) ' + $.util.date(Date.now(), 'UTC:yyyy') + ' AllMobilize, Inc.',
    'Licensed under <%= pkg.license %>',
    $.util.date(Date.now(), dateFormat) + ' */ \n'
].join(' | ');

gulp.task('watch', function () {
    gulp.watch(['./less/*.*'], ['build:less']);
});

gulp.task('default', ['watch']);

// Build to dist dir.
gulp.task('build:less', function () {
    gulp.src(config.path.less)
        .pipe($.header(banner, {pkg: pkg, ver: ''}))
        .pipe($.plumber({
            errorHandler: function (err) {
                // 处理编译less错误提示  防止错误之后gulp任务直接中断
                // $.notify.onError({
                //           title:    "编译错误",
                //           message:  "错误信息: <%= error.message %>",
                //           sound:    "Bottle"
                //       })(err);
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe($.less({
            paths: [
                path.join(__dirname, 'less')]
        }))
        .pipe($.autoprefixer({browsers: config.AUTOPREFIXER_BROWSERS}))
        .pipe(gulp.dest(config.dist.css))
        .pipe($.size({showFiles: true, title: 'source'}))
        // Disable advanced optimizations - selector & property merging, etc.
        // for Issue #19 https://github.com/allmobilize/amazeui/issues/19
        .pipe($.minifyCss({noAdvanced: true}))
        .pipe($.rename({
            suffix: '.min',
            extname: '.css'
        }))
        .pipe(gulp.dest(config.dist.css))
        .pipe(gulp.dest(config.dist.docDist))
        .pipe($.size({showFiles: true, title: 'minified'}))
        .pipe($.size({showFiles: true, gzip: true, title: 'gzipped'}));
});