const {src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function css(done) {

    src('src/scss/app.scss')
        .pipe( sass({outputStyle: 'compressed'}))
        .pipe( dest('build/css'))

    done()
}

function dev(){
    watch( 'src/scss/app.scss', css)
}

exports.dev = dev
exports.css = css