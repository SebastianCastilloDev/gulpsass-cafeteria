const {src, dest, watch, series, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const imagemin = require('gulp-imagemin')


function css(done) {

    src('src/scss/app.scss')
        .pipe( sass({outputStyle: 'expanded'}))
        .pipe( postcss([autoprefixer()]))
        .pipe( dest('build/css'))
    done()
}

function imagenes(done) {
    src('src/img/**/*')
        .pipe(imagemin({optimizationLevel: 3}))
        .pipe(dest('build/img'))
    done()
}


function dev(){
    watch('src/scss/**/*.scss', css)
    watch('src/img/**/*', imagenes)
}


exports.css = css
exports.dev = dev
exports.imagenes = imagenes
exports.default = series(imagenes, css, dev)

