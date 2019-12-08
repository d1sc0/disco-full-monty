import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from 'gatsby-image'

const getImages = graphql`
  {
    fluid1: file(
      relativePath: { eq: "jamie-street-MoDcnVRN5JU-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const data = useStaticQuery(getImages)
  return (
    <Layout>
      <SEO title="About" />
      <div className="container py-5">
        <h1>About The Full Monty</h1>
        <Image
          fluid={data.fluid1.childImageSharp.fluid}
          className="about-image"
          alt="spaceman"
        />
        <p className="lead my-4">
          I'm Monty the Dog! Welcome to my blog. It's not a real blog. It's just
          a placeholder my human built to play around with Gatsby & React to
          build static front end experiences whilst using Contentful to manage
          and expose content via APIs
        </p>
        <p id="more" className="mb-4">
          It's far from perfect and the human has a long list of things that he
          might add to improve on it at a later date. The list is below is for
          reference and not complete.
        </p>
        <ul>
          <li>
            <del>Explore gatsby-background-image plugin (package added)</del>
          </li>
          <li>
            <del>Stand up on Nelify</del>
          </li>
          <li>
            <del>Sort out on Git, CD and test webhooks</del>
          </li>
          <li>
            <del>Add pagination on blogs></del>
          </li>
          <li>
            <del>
              Improve styling (markdown parsing, crappy blog links, card footers
            </del>
            etc)
          </li>
          <li>favicon</li>
          <li>Complete SEO and PWA config</li>
          <li>Test with Lighthouse</li>
          <li>Add GA and commenting?</li>
          <li>update to use as a Starter</li>
        </ul>
      </div>
    </Layout>
  )
}

export default About
