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
    }
  `)

  const posts = results.data.allContentfulPost.edges
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
}
