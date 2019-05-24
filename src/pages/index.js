import React from "react"
import Seo from "../components/Seo"
import Layout from "../templates/layout"

const IndexPage = () => (
  <Layout>
    <Seo title="اینترنت چیزها" />

    <div className="container">
      This is the main page
    </div>
  </Layout>
)

export default IndexPage
