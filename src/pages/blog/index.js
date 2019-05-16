import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../../components/seo"

export const query = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

export default function Blog({ data }) {
  const { edges } = data.allContentfulPost
  return (
    <div>
      <SEO
        title="وبلاگ"
        description="مقالات و آموزش های مرتبط با اینترنت چیزها (اشیاء) به زبان فارسی | معرفی ابزار و نرم‌افزار"
      />
      {edges.map(post => (
        <div>
          <Link to={`/blog/${post.node.slug}`} key={post.node.slug}>
            {post.node.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
