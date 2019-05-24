import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../../components/Seo"
import Layout from "../layout"
import { toJalali } from "../../helpers/date"
import {MdKeyboardArrowRight} from 'react-icons/md'
import {MdKeyboardArrowLeft} from 'react-icons/md'

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
        name
        slug
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
      tags {
        name
        slug
      }
      category {
        name
        slug
      }
      childContentfulPostContentRichTextNode {
        childContentfulRichText {
          html
        }
      }
      createdAt
    }
  }
`

export default function SinglePost({data, pageContext}) {
  const { contentfulPost: post } = data
  const {next, prev} = pageContext

  return (
    <Layout>
      <Seo title={post.title} description={post.metaDescription} />
      {next && <Link to={`/blog/${next.slug}`} className="navigate-button next"> <MdKeyboardArrowRight /> </Link>}
      {prev && <Link to={`/blog/${prev.slug}`} className="navigate-button prev"> <MdKeyboardArrowLeft /> </Link>}
      <div className="container">
        <article className="single-post">
          <div
            className="single-post-top-image col-xs-12"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(36, 59, 85, 0.2), rgba(20, 30, 48, 0.90)), url(${
                post.image.file.url
                })`,
            }}
          >
            <Link
              className="single-post-author-image"
              to={`/author/${post.author.slug}`}
              style={{
                backgroundImage: `url(${post.author.avatar.file.url})`,
              }}
              title={`نویسنده: ${post.author.name}`}
            />
            <h1>{post.title}</h1>
            <div className="single-post-tags">
              <ul>
                {post.tags.map(tag => (
                  <li key={tag.slug}>
                    <Link to={`/blog/tags/${tag.slug}`}> {tag.name} </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="single-post-detail">
            <ul>
              <li>
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li>
                <Link to="/blog">وبلاگ</Link>
              </li>
              <li>
                <span> {post.title} </span>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 inside-single-post">
            <div
              className="single-post-content"
              dangerouslySetInnerHTML={{
                __html:
                post.childContentfulPostContentRichTextNode
                  .childContentfulRichText.html,
              }}
            />
            <div className="post-footer-detail">
              دسته بندی: <Link to={`/blog/categories/${post.category.slug}`}> {post.category.name} </Link>
              <span>تاریخ انتشار: <time>{toJalali(new Date(post.createdAt))}</time></span>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}
