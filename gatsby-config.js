module.exports = {
  siteMetadata: {
    title: 'James Evans',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
  	{
  		resolve: 'gatsby-plugin-typography',
  		options: {
  			pathToConfigModule: 'src/utils/typography.js'
  		},
  	},
  ],
}
