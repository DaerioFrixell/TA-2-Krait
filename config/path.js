const pathSrc = "./src"
const pathDest = "./docs"

export default {
  root: pathDest,

  html: {
    src: pathSrc + "/html/*.html",
    watch: pathSrc + "/html/**/*.html",
    dest: pathDest
  },

  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest
  },

  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css"
  },

  scss: {
    src: pathSrc + "/scss/*.{scss, sass}",
    watch: pathSrc + "/scss/**/*.{scss, sass}",
    dest: pathDest + "/css"
  },

  img: {
    src: pathSrc + "/img/*.{png,jpeg,jpg,gif,svg}",
    watch: pathSrc + "/scss/**/*.{png,jpeg,jpg,gif,svg}",
    dest: pathDest + "/img"
  }
}

