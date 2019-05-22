import React from "react"
import { Link } from "gatsby"
import "flexboxgrid"
import "../../assets/scss/main.scss"


export default () => (
  <header className="container-fluid">
    <nav className="row center-lg center-md center-sm center-xs">
      <Link to="/">صفحه اصلی</Link>
      <Link to="/blog">مقالات</Link>
      <Link to="/startup">معرفی استارتاپ ها</Link>
      <Link to="/about-us">درباره ما</Link>
      <Link to="/contact">تماس</Link>
    </nav>
  </header>
)
