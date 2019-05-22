import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../../components/seo"
import Layout from "../../templates/layout"

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
            slug
            avatar {
              id
              file {
                url
              }
            }
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
        description="مقالات و آموزش‌های مرتبط با اینترنت چیزها (اشیاء) به زبان فارسی | معرفی ابزار و نرم‌افزار"
      />
      <div className="container">
        <div className="row blog-post-list">
          {edges.map(post => (
            <article key={post.node.slug} className="col-xs-6">
              <Link
                to={`/blog/${post.node.slug}`}
                className="post-thumbnail"
                style={{ backgroundImage: `url(${post.node.image.file.url})` }}
              />
              <Link
                className="post-author-image"
                to={`/author/${post.node.author.slug}`}
                style={{
                  backgroundImage: `url(${post.node.author.avatar.file.url})`,
                }}
              />
              <div className="post-author">نویسنده: <Link to={`/author/${post.node.author.slug}`}>{post.node.author.name}</Link></div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}
