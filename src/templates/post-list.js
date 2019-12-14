import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardSet from '../components/cardset'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const BlogPage = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  const pageImage = data.posts.edges[0].post.images[0].fluid.src

  return (
    <Layout>
      <SEO title="Blog" image={pageImage} blogIndex={true} />
      <CardSet postData={data.posts.edges} colSetup="col-md-6" />
      <div className="container text-center">
        {!isFirst && (
          <Link
            to={`/blog/${prevPage}`}
            className="btn btn-info m-2 navBtn"
            rel="prev"
          >
            Previous Page
          </Link>
        )}
        {!isLast && (
          <Link
            to={`/blog/${nextPage}`}
            className="btn btn-info m-2 navBtn"
            rel="next"
          >
            Next Page
          </Link>
        )}
      </div>
    </Layout>
  )
}

// Grabs latest posts for home page. Change query below to change number of posts returned.
export const data = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      sort: { fields: postDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        post: node {
          id: contentful_id
          slug
          postTitle
          postDate(formatString: "DD MMMM YYYY")
          postBody {
            childMarkdownRemark {
              excerpt(pruneLength: 140, format: PLAIN)
            }
          }
          images {
            fluid(maxWidth: 450) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default BlogPage
