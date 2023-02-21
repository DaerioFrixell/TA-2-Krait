import gulp from "gulp"

//config
import path from "../config/path.js"

// plugins
import concat from "gulp-concat"
import cssimport from "gulp-cssimport"
import autoPrefixer from "gulp-autoprefixer"
import csso from "gulp-csso"
import rename from "gulp-rename"
import size from "gulp-size"
import shorthand from "gulp-shorthand"
import groupCssMediaQueries from "gulp-group-css-media-queries"

// плагины
import plumber from "gulp-plumber"
import notify from "gulp-notify"

export const css = () => {
  return gulp.src(path.css.src, { sourcemaps: true })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "CSS",
        message: `говной пахнет: ${error.message}`
      }))
    }))
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(autoPrefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: "CSS before size" }))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "CSS after size" }))
    .pipe(gulp.dest(path.css.dest, { sourcemaps: true }))
}