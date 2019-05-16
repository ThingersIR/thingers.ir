import React from "react"
import "../assets/scss/main.scss"
import logo from "./../images/ThingersLogo.png"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Layout from "../templates/layout"

const IndexPage = () => (
  <Layout>
    <SEO title="اینترنت چیزها" />
    <Link to="/blog"> وبلاگ </Link>
  </Layout>
)

export default IndexPage
