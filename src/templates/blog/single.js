import React from "react"
import Disqus from "gatsby-plugin-disqus"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
import Layout from "../layout"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      id
      title
      slug
      image {
        file {
          url
          fileName
          contentType
        }
        title
        description
      }
      metaDescription
      author {
        id
        name
        site
        avatar {
          id
          file {
            url
            fileName
            contentType
          }
        }
        bio {
          bio
        }
      }
      childContentfulPostContentRichTextNode {
        childContentfulRichText {
          html
        }
      }
    }
  }
`

export default function SinglePost(props) {
  const { contentfulPost: post } = props.data

  return (
    <Layout>
      <Seo title={post.title} description={post.metaDescription} />
      <article className="single-post container">
        <div className="single-post-top-image">
          <img
            src={post.image.file.url}
            alt={post.image.description}
            title={post.image.title}
          />
        </div>
        <div className="col-xs-12 inside-single-post">
          <h1>{post.title}</h1>
          <div
            className="single-post-content"
            dangerouslySetInnerHTML={{
              __html:
                post.childContentfulPostContentRichTextNode
                  .childContentfulRichText.html,
            }}
          />
        </div>
      </article>
      <div className="container">
        <div className="row">
          <Disqus
            identifier={post.id}
            title={post.title}
            url={`https://thingers.ir/blog${post.slug}`}
          />
        </div>
      </div>
    </Layout>
  )
}
