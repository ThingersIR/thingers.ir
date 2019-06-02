import React from "react"
import Img from "gatsby-image"
import Seo from "../../components/Seo"
import Layout from "../../templates/layout"
import { graphql, Link } from "gatsby"
import PageSuperHeaderWithSearchBox from "../../components/PageSuperHeaderWithSearchBox"

export const query = graphql`
  query {
    allContentfulStartup(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          name
          slug
          category {
            name
            slug
            description {
              description
            }
          }
          website
          telegram
          instagram
          linkedin
          mediaFiles {
            title
            description
            fixed(quality: 80, width: 600) {
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
            name
            url
          }
        }
      }
    },
    contentfulSiteMedia {
      startupsHeaderImage {
        title
        description
        fixed(quality: 100, width: 1300) {
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
    }
  }
`

const StartupPage = props => {
  const {
    data: {
      allContentfulStartup: { edges: startups },
      contentfulSiteMedia: {startupsHeaderImage}
    },
  } = props
  return (
    <Layout>
      <Seo title="استارتاپ ها" description="معرفی استارتاپ های فعال در حوزه اینترنت اشیا اینترنت چیزها IOT Internet of things" />

      <PageSuperHeaderWithSearchBox
        image={startupsHeaderImage.fixed}
        imageAlt={startupsHeaderImage.description}
      />

      <div className="container">
        <div className="row">
          {startups.map(({ node: startup }) => (
            <Link to={`/startup/${startup.slug}`} key={startup.slug} className="startup-thumbnail col-xs-12 col-sm-6 col-md-4">
              <article className="startup-thumbnail-image">
                <div className="gradient-layer" />
                <h1>{startup.name}</h1>
                <h4>{startup.category.name}</h4>
                <Img fixed={startup.mediaFiles[0].fixed} alt={startup.mediaFiles[0].description} title={startup.mediaFiles[0].title} />
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default StartupPage
