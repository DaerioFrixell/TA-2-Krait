import gulp from "gulp"

// config
import path from "../config/path.js"
import app from "../config/app.js"


// plugins
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import pugs from "gulp-pug"
import rep from "gulp-replace-image-src"

export const pug = () => {
  return gulp.src(path.pug.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "PUG",
        message: `говной пахнет: ${error.message}`
      }))
    }))
    .pipe(pugs(app.pug))
    .pipe(rep({
      prependSrc: 'img/',
      keepOrigin: false
    }))
    .pipe(gulp.dest(path.pug.dest))
}


