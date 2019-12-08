/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      posts: allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  const blogPosts = data.posts.edges
  const blogPostsPerPage = 3
  const numPages = Math.ceil(blogPosts.length / blogPostsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/post-list.js'),
      context: {
        limit: blogPostsPerPage,
        skip: i * blogPostsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve('./src/templates/post-template.js'),
      context: {
        slug: node.slug,
      },
    })
  })
}
