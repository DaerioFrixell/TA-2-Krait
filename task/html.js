import gulp from "gulp"
import path from "../config/path.js"
import app from "../config/app.js"

// plugins
import fileInclude from "gulp-file-include"
import htmlMin from "gulp-htmlmin"
import size from "gulp-size"

// плагины
import plumber from "gulp-plumber"
import notify from "gulp-notify"

export const html = () => {
  return gulp.src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "HTML",
        message: `говной пахнет: ${error.message}`
      }))
    }))
    .pipe(fileInclude())
    .pipe(size({ title: "before resize" }))
    .pipe(htmlMin(app.htmlmin))
    .pipe(size({ title: "after resize" }))
    .pipe(gulp.dest(path.html.dest))
}