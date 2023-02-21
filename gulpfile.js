import gulp from "gulp"
import browserSync from "browser-sync"
import path from "./config/path.js"

// в tasks нужно указывать расширения 
import { clear } from "./task/clear.js"
import { pug } from "./task/pug.js"
import { scss } from "./task/scss.js"
import { img } from "./task/img.js"

// server
browserSync.create()
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

// watchers
const watcher = () => {
  gulp.watch(path.pug.watch, pug).on("all", browserSync.reload)
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload)
  gulp.watch(path.img.watch, img).on("all", browserSync.reload)
}

const build = gulp.series(
  clear,
  gulp.parallel(pug, img, scss),
  gulp.parallel(watcher, server)
)

//build
export { build }

