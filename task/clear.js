import del from "del"

import path from "../config/path.js"

export const clear = () => {
  return del(path.root)
}