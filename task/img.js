import gulp from "gulp"

//config
import path from "../config/path.js"

// plugins
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import imagemin from "gulp-imagemin"
import app from "../config/app.js"


export const img = () => {
  return gulp.src(path.img.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "IMG",
        message: `говной пахнет: ${error.message}`
      }))
    }))
    .pipe(imagemin(app.image))
    .pipe(gulp.dest(path.img.dest))
}