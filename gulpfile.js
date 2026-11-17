const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compilar SCSS para CSS
function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./src/styles'));
}

// Monitorar alterações nos arquivos SCSS
function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = watchFiles;
exports.default = gulp.series(styles, watchFiles);