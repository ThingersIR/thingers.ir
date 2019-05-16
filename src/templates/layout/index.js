import React, { Fragment } from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
)
