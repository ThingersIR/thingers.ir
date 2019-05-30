import React from "react"
import { Link } from "gatsby"


export default () => (
  <header className="container-fluid">
    <nav>
      <Link activeClassName="active" to="/">صفحه اصلی</Link>
      <Link activeClassName="active" to="/blog">وبلاگ</Link>
      <Link activeClassName="active" to="/startup">استارتاپ ها</Link>
      <Link activeClassName="active" to="/about-us">درباره ما</Link>
    </nav>
  </header>
)
