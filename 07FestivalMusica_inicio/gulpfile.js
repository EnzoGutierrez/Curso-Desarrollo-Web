
const {src, dest, watch, parallel   } = require("gulp");

//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//Imagenes
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(done){
    src("src/scss/**/*.scss")    //Indentificar el archivo SASS
        .pipe(plumber()) //Compilarlo
        .pipe(sass())
        .pipe(dest("build/css"))    //Almacenarla en el disco duro

    done();
}

function imagenes(done){
    const opciones = {
        optimizationLevel: 3
    }
    src("src/img/**/*.{png,jpg}")
    .pipe(cache(imagemin(opciones)))
    .pipe(dest("build/img"))
    done();
}

function versionWebp(done){

    const opciones = {
        quiality: 50
    };

    src("src/img/**/*.{png,jpg}")
        .pipe(webp(opciones))
        .pipe(dest("build/img"))
    done();
}

function versionAvif(done){

    const opciones = {
        quiality: 50
    };

    src("src/img/**/*.{png,jpg}")
        .pipe(avif(opciones))
        .pipe(dest("build/img"))
    done();
}

function javascript(done){
    src("src/js/**/*.js")
        .pipe(dest("build/js"));

    done();
}


function dev(done){
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", javascript);


    done();
}

exports.css = css;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionAvif = versionAvif;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp, versionAvif, javascript, dev);