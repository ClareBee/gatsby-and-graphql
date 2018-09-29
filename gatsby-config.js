module.exports = {
  siteMetadata: {
    title: `Gatsy & GraphQL`,
    about: `About`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
};
