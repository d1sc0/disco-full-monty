import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import CardSet from '../components/cardset'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <CardSet postData={data.posts.edges} />
  </Layout>
)

// Grabs latest posts for home page. Change query below to change number of posts returned.
export const data = graphql`
  {
    posts: allContentfulPost(sort: { fields: postDate, order: DESC }) {
      edges {
        post: node {
          id: contentful_id
          slug
          postTitle
          postDate(formatString: "DD MMMM YYYY")
          postExcerpt {
            postExcerpt
          }
          images {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default BlogPage
