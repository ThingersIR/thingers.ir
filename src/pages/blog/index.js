import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../templates/layout"
import BlogSidebar from "../../templates/blog/sidebar"

export const query = graphql`
  query {
    allContentfulPost {
      edges {
        node {
          title
          slug
          image {
            title
            description
            file {
              url
            }
          }
          author {
            name
            id
          }
          category {
            id
            name
            slug
          }
          tags {
            id
            slug
            name
          }
        }
      }
    }
  }
`

export default function Blog({ data }) {
  const { edges } = data.allContentfulPost
  return (
    <Layout>
      <SEO
        title="وبلاگ"
        description="مقالات و آموزش های مرتبط با اینترنت چیزها (اشیاء) به زبان فارسی | معرفی ابزار و نرم‌افزار"
      />
      <div className="container">
        <div className="row">
          <BlogSidebar />
          <article className="blog-post-list col-md-9 col-xs-12">
            {edges.map(post => (
              <div key={post.node.slug} className="row">
                <Link to={`/blog/${post.node.slug}`} className="post-list-thumbnail col-xs-5" style={{background: `url(${post.node.image.file.url})`}}>
                  se
                </Link>
                <div className="col-xs-7">
                  <h4>tst</h4>
                  <p>sdfjsodfj lsjd flsldjf lsdjf lksajfdlk jflkj sdlfjlsdf jlfsdj lksdjflkj</p>
                </div>
              </div>
            ))}
          </article>
        </div>
      </div>
    </Layout>
  )
}
