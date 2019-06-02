import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

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
      <Seo
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
