import React from "react"
import { Link } from "gatsby"
import "../../assets/scss/main.scss"


export default () => (
  <header className="container-fluid">
    <nav>
      <Link to="/">صفحه اصلی</Link>
      <Link to="/blog">وبلاگ</Link>
      <Link to="/startup">استارتاپ ها</Link>
      <Link to="/about-us">درباره ما</Link>
    </nav>
  </header>
)
