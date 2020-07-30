const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style(){
    return gulp.src('./css/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest('./'))
            .pipe(browserSync.stream());
}

// function lintCss(){
//     return gulp.src('./scss/**/*.scss')
//         .pipe(gulpStylelint({
//             reporters: [
//             {formatter: 'string', console: true}
//             ]
//         }));
// }


function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    })
    gulp.watch('./css/**/*.scss', style);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
// exports.lintCss = lintCss;
exports.watch = watch;
