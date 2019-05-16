exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  results.data.allContentfulPost.edges.forEach(({ node }) => {
    const { slug } = node
    createPage({
      path: `/blog/${slug}`,
      component: require.resolve("./src/templates/blog/single.js"),
      context: { slug },
    })
  })
}
