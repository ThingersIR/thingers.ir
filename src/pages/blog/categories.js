import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"

export const query = graphql`
  query {
    allContentfulCategory {
      edges {
        node {
          id
        }
      }
    }
  }
`

export default ({ data }) => {
  const { edges } = data.allContentfulCategory
  return (
    <div>
      <SEO
        title="دسته بندی مطالب"
        description="دسته بندی مطالب وبسایت Thingers.ir مقالات در حوزه اینترنت چیزها (اشیاء)"
      />
      {edges.map(category => (
        <div>
          shod ye cat
        </div>
      ))}
    </div>
  )
}
