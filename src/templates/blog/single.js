import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: {eq: $slug}) {
      title
      image {
        id
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
  const { contentfulPost } = props.data
  console.log(props)

  return (
    <div>
      <SEO title={contentfulPost.title} description={contentfulPost.metaDescription} />
      <h1>{contentfulPost.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html:
          contentfulPost.childContentfulPostContentRichTextNode
            .childContentfulRichText.html,
        }}
      />
    </div>
  )
}