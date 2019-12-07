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
    images,
    postBody: {
      childMarkdownRemark: { html },
    },
  } = data.blogPost
  const postImage = images[0].fluid

  return (
    <Layout>
      <SEO title={`${postTitle}`} />

      <div className="container py-5">
        <div className="row">
          <div className="col-sm-6">
            <h1>{postTitle}</h1>
            <h6>Posted: {postDate}</h6>
            <div
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
          <div className="col-sm-6">
            <Image
              fixed={postImage}
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
        }
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

export default PostTemplate
