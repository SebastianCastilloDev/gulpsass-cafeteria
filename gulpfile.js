const {src} = require('gulp')
const sass = require('gulp-sass')

function css(done){
    //compilar sass
    //pasos indentifica 1archivo, 2compilar,3guardar.css
    src('src/scss/app.scss')
        .pipe( sass())
    
    done()
}

exports.css=css