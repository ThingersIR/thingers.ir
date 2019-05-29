exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allContentfulPost(sort: {order: ASC, fields: createdAt}) {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulStartup(sort: {order: ASC, fields: createdAt}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const posts = results.data.allContentfulPost.edges
  const startups = results.data.allContentfulStartup.edges
  posts.forEach(({ node }, index) => {
    const { slug } = node
    createPage({
      path: `/blog/${slug}`,
      component: require.resolve("./src/templates/blog/single.js"),
      context: {
        slug,
        prev: index === 0 ? null : posts[index - 1].node,
        next: index === (posts.length - 1) ? null : posts[index + 1].node
      },
    })
  })
  // startups.forEach(({ node }, index) => {
  //   const { slug } = node
  //   createPage({
  //     path: `/startup/${slug}`,
  //     component: require.resolve("./src/templates/startup/single.js"),
  //     context: {
  //       slug,
  //       prev: index === 0 ? null : startups[index - 1].node,
  //       next: index === (startups.length - 1) ? null : startups[index + 1].node
  //     },
  //   })
  // })
}
