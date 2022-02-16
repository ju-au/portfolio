const { src, dest, watch, series } = require('gulp');
const plumber = require("gulp-plumber");

const sass = require('gulp-dart-sass');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const terser = require('gulp-terser');
const rename = require('gulp-rename');

const imagemin = require('gulp-imagemin');
const pngquant = require("imagemin-pngquant");
const changed = require("gulp-changed");

const imagewebp = require('gulp-webp');

function compilescss() {
    return src('style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(prefix('last 2 versions'))
        .pipe(minify())
        .pipe(dest('./'))
};

function optimizeimg() {
    return src('src/images/{*/*.{jpg,png},*.{jpg,png}}')
        .pipe(changed("./dist/image/"))
        .pipe(changed("./dist/image/*/"))
        .pipe(imagemin([
            pngquant({
                quality: [0.6, 0.7],
                speed: 1,
            }),
            imagemin.mozjpeg({ quality: 65, progressive: true }),
            imagemin.optipng({ optimizationLevel: 2 }),
        ]))
        .pipe(dest('dist/images'))
};

function webpImage() {
    return src('dist/images/{*/*.{jpg,png},*.{jpg,png}}')
        .pipe(imagewebp())
        .pipe(dest('dist/images'))
};

function bundle() {
    return src('src/js/index.js')
        .pipe(plumber())
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(dest('dist/js'));
}

function jsmin() {
    return src('dist/js/bundle.js')
        .pipe(plumber())
        .pipe(terser())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(dest('dist/js'));
}

function watchTask() {
    watch('src/scss/**/*.scss', compilescss);
    watch('src/js/*.js', bundle);
    watch('dist/js/bundle.js', jsmin);
    watch('src/images/{*/*.{jpg,png},*.{jpg,png}}', optimizeimg);
    watch('dist/images/{*/*.{jpg,png},*.{jpg,png}}', webpImage);
}


exports.default = series(
    compilescss,
    bundle,
    jsmin,
    optimizeimg,
    webpImage,
    watchTask
);