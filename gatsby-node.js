// uses Gatsby's onCreateNode api
// called whenever new node is created/updated
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  // createNodeField allows additional fields on nodes created by other apis
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // getNode traverses 'node graph' to get to parent File node
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};
//  use createPages api called by Gatsby so plugins can create pages
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
