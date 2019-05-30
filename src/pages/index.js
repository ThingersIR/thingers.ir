import React from "react"
import Seo from "../components/Seo"
import Layout from "../templates/layout"
import { graphql } from "gatsby"
import thingers from "../images/ThingersLogo.png"

export const query = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          fixed {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // const imageObject = data.allImageSharp.edges[0].node.fixed
  return (
    <Layout>
      <Seo title="اینترنت چیزها" />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <img
            src={thingers}
            alt="Thingers.ir"
            style={{ maxWidth: "100%", marginTop: 50 }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
