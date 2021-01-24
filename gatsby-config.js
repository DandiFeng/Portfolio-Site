module.exports = {
	siteMetadata: {
		title: `Gatsby Starter Paperbase Dashboard`,
		author: `Marc Arbesman`,
		description: `A starter dashboard demonstrating Material UI's Paperbase theme in Gatsby`,
		siteUrl: `https://gatsby-starter-paperbase-demo.netlify.com/`,
		social: {
			twitter: `willcode4food`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-plugin-material-ui`,
		},
		{
          resolve: "gatsby-plugin-web-font-loader",
          options: {
              urls: ["/fonts/fontawesome-free-5.13.1-web/css/fontawesome.min.css"],
          },
        },
        {
	        resolve: `gatsby-plugin-manifest`,
	      	options: {
	        name: `GatsbyJS`,
	        short_name: `GatsbyJS`,
	        start_url: `/`,
	        background_color: `#f7f0eb`,
	        theme_color: `#a2466c`,
	        display: `standalone`,
	        icon:'static/images/favicon/favicon-32x32.png',
	    	},
        },
	],
}
