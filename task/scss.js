import gulp from "gulp"

//config
import path from "../config/path.js"

// plugins
import autoPrefixer from "gulp-autoprefixer"
import csso from "gulp-csso"
import rename from "gulp-rename"
import size from "gulp-size"
import shorthand from "gulp-shorthand"
import groupCssMediaQueries from "gulp-group-css-media-queries"
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import urlAdjuster from "gulp-css-replace-url"


// плагины
import plumber from "gulp-plumber"
import notify from "gulp-notify"
const sass = gulpSass(dartSass);

export const scss = () => {
  return gulp.src(path.scss.src, { sourcemaps: true })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "SCSS",
        message: `говной пахнет: ${error.message}`
      }))
    }))
    .pipe(sass())
    .pipe(autoPrefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "CSS before size" }))
    .pipe(urlAdjuster({
      replace: ['../../img', '../img'],
    }))
    .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "CSS after size" }))

    .pipe(gulp.dest(path.scss.dest, { sourcemaps: true }))
}


