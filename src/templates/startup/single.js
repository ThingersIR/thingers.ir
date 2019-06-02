import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"
import Layout from "../layout"
import Img from 'gatsby-image'
import LinkIcon from "../../components/LinkIcon"

export const query = graphql`
  query($slug: String!) {
    contentfulStartup(slug: {eq: $slug}) {
      name
      slug
      website
      telegram
      instagram
      linkedin
      mediaFiles {
        title
        description
        fixed {
          base64
          aspectRatio
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
        }
      }
      intro {
        intro
      }
      founders {
        id
        url
        name
      }

      category {
        name
        slug
        description {
          id
          description
        }
      }
    }
  }
`

export default function SingleStartup(props) {
  const {data: {contentfulStartup}} = props;
  return (
    <Layout>
      <Seo title={`معرفی استارتاپ ${contentfulStartup.name} `} description={contentfulStartup.intro.intro} />
      <div className="single-startup-box container">
        <h1>{contentfulStartup.name}</h1>
        <p>{contentfulStartup.intro.intro}</p>
        <Img fixed={contentfulStartup.mediaFiles[0].fixed} alt={contentfulStartup.mediaFiles[0].description}/>
        {contentfulStartup.website && <LinkIcon icon="web" url={contentfulStartup.website} />}
        {contentfulStartup.linkedin && <LinkIcon icon="linkedin" url={contentfulStartup.linkedin} />}
        {contentfulStartup.instagram && <LinkIcon icon="instagram" url={contentfulStartup.instagram} />}
        {contentfulStartup.telegram && <LinkIcon icon="telegram" url={contentfulStartup.telegram} />}
      </div>
    </Layout>
  )
}
