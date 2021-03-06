/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: "@use 'index' as *;",
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`],
        },
      },
    },
  ],
};
