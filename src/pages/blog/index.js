import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../../components/Seo"
import Layout from "../../templates/layout"
import SearchBox from "../../components/SearchBox"
import { toJalali } from "../../helpers/date"
import Img from "gatsby-image"

export const query = graphql`
  query {
    allContentfulPost(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          title
          slug
          image {
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
            name
            slug
          }
          tags {
            slug
            name
          }
          createdAt
          content {
            childContentfulRichText {
              html
            }
          }
        }
      }
    },
    contentfulSiteMedia {
      blogHeaderImage {
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

export default function Blog({ data }) {
  const { edges } = data.allContentfulPost
  return (
    <Layout>
      <Seo
        title="وبلاگ"
        description="مقالات و آموزش‌های مرتبط با اینترنت چیزها (اشیاء) به زبان فارسی | معرفی ابزار و نرم‌افزار"
      />
      <div className="container-fluid">
        <div className="row page-super-header justify-content-center align-items-center">
          <Img fixed={data.contentfulSiteMedia.blogHeaderImage.fixed} alt={data.contentfulSiteMedia.blogHeaderImage.description}/>
          <div className="gradient-layer" />
          <div className="search-in-header-container col-md-4 col-xs-12">
            <SearchBox />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row blog-post-list">
          {edges.map(post => (
            <article
              key={post.node.slug}
              className="col-md-12 col-lg-6 post-block"
            >
              <div className="inside-post-block">
                <Link to={`/blog/${post.node.slug}`} className="post-thumbnail">
                  <Img
                    alt={post.node.image.description}
                    fixed={post.node.image.fixed}
                    className="post-thumbnail-image"
                  />
                </Link>
                <Link
                  className="post-author-image"
                  to={`/author/${post.node.author.slug}`}
                  style={{
                    backgroundImage: `url(${post.node.author.avatar.file.url})`,
                  }}
                  title={post.node.author.name}
                />
                <div className="post-author">
                  نویسنده:{" "}
                  <Link to={`/author/${post.node.author.slug}`}>
                    {post.node.author.name}
                  </Link>
                </div>
                <time className="post-date">
                  {toJalali(new Date(post.node.createdAt))}
                </time>
                <div className="post-content-detail">
                  <h1 className="post-title">
                    <Link to={`/blog/${post.node.slug}`}>
                      {post.node.title}
                    </Link>
                  </h1>
                  <div className="post-tags-list">
                    <ul>
                      {post.node.tags.map(tag => (
                        <li key={tag.slug}>
                          <Link to={`/blog/tags/${tag.slug}`}>
                            {" "}
                            {tag.name}{" "}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="post-excerpt">
                    {post.node.content.childContentfulRichText.html
                      .replace(/<[^>]*>/g, "")
                      .slice(0, 250)}
                    ...
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}
