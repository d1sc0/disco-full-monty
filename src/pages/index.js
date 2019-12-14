import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import JumboB from '../components/jumbo_b'
import CardSet from '../components/cardset'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" image={data.fluid1.childImageSharp.fluid.src} />
      <JumboB
        jumboData={jbdata}
        jumboImage={data.fluid1.childImageSharp.fluid}
      />
      <CardSet postData={data.posts.edges} colSetup="col-md-4" />
      <div className="container text-center">
        <Link to="/blog/" className="btn btn-info my-2 navBtn">
          Read more posts...
        </Link>
      </div>
    </Layout>
  )
}

// set text and image class for home pae jumbotron, image in query
const jbdata = {
  Title: 'Woof Woof!',
  ImgClass: 'jumbotron',
  Text:
    "I'm Monty the Dog! Welcome to my blog.It's not a real blog. It's just a placeholder my human built to play around with Gatsby & React to build static front end experiences whilst using Contentful to manage and expose content via APIs",
  Action: '/about/#more',
  BtnText: 'Continue Reading...',
}

// Grabs latest posts for home page and image for JumboTron. Change query below to change number of posts returned.
export const data = graphql`
  query {
    posts: allContentfulPost(
      sort: { fields: postDate, order: DESC }
      limit: 6
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
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
    fluid1: file(
      relativePath: { eq: "jamie-street-MoDcnVRN5JU-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(duotone: { highlight: "#282828", shadow: "#080808" }) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
