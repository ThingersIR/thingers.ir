import React from "react"
import {Link} from 'gatsby'

export default () => (
  <aside className="blog-sidebar col-md-3">
    <div className="cat-tag-section">
      <ul>
        <li>
          <Link to="/blog/categories"> دسته بندی (22) </Link>
        </li>
        <li>
          <Link to="/blog/tags"> تگ (22) </Link>
        </li>
      </ul>
    </div>
    <div className="random-post-section">
      <ul>
        <li className="">
          <Link to="/" className="row">
            <img src="https://www.instrumart.com/assets/Seek-compactPro-360.jpg" alt="testsdsfdsdf "/>
            <span className="col-xs">چگونه تست بگیریم و استفاده کنیم در این بخش</span>
          </Link>
        </li>
        <li className="">
          <Link to="/" className="row">
            <img src="https://www.instrumart.com/assets/Seek-compactPro-360.jpg" alt="testsdsfdsdf "/>
            <span className="col-xs">چگونه تست بگیریم و استفاده کنیم در این بخش</span>
          </Link>
        </li>
        <li className="">
          <Link to="/" className="row">
            <img src="https://www.instrumart.com/assets/Seek-compactPro-360.jpg" alt="testsdsfdsdf "/>
            <span className="col-xs">چگونه تست بگیریم و استفاده کنیم در این بخش</span>
          </Link>
        </li>
      </ul>
    </div>
  </aside>
)
