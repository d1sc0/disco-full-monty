import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Image from 'gatsby-image'
//import { Link } from 'gatsby'

const PostTemplate = ({ data }) => {
  const {
    postTitle,
    postDate,
    postImage,
    postBody: {
      childMarkdownRemark: { excerpt },
    },
    postBody: {
      childMarkdownRemark: { html },
    },
  } = data.blogPost
  const inPostImage = postImage.fluid
  const twitterCardImage = postImage.fluid.src

  return (
    <Layout>
      <SEO
        title={postTitle}
        image={twitterCardImage}
        description={excerpt}
        article={true}
      />

      <div className="container py-5">
        <div className="col-12 row">
          <h1>{postTitle}</h1>
        </div>
        <div className="col-12 row">
          <h6>Posted: {postDate}</h6>
        </div>
        <div className="row blogPage">
          <div className="col-md-6 pb-3">
            <div
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
          <div className="col-md-6 pb-3">
            <Image
              fluid={inPostImage}
              objectFit="cover"
              className="mb-0 img-fluid post-img-main rounded"
              alt=""
            />
          </div>
        </div>
        <p></p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    blogPost: contentfulPost(slug: { eq: $slug }) {
      postTitle
      postDate(formatString: "DD MMMM YYYY")
      slug
      postBody {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 140, format: PLAIN)
        }
      }
      postImage {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default PostTemplate
