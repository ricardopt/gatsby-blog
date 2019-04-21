module.exports = {
	siteMetadata: {
		title: `Mario Hernandez - Front-End Developer and Speaker from Los Angeles`,
		description: `All things Front-End`,
		siteUrl: `https://mariohernandez.io`,
		author: 'Mario Hernandez'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-react-helmet',
		`gatsby-plugin-twitter`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-next`,
		`gatsby-plugin-catch-links`,
		{
    resolve: `gatsby-plugin-favicon`,
			options: {
				logo: "./src/favicon.png",
				// WebApp Manifest Configuration
				appName: null, // Inferred with your package.json
				appDescription: null,
				developerName: null,
				developerURL: null,
				dir: 'auto',
				lang: 'en-US',
				background: '#fff',
				theme_color: '#fff',
				display: 'standalone',
				orientation: 'any',
				start_url: '/?homescreen=1',
				version: '1.0',

				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					yandex: false,
					windows: true
				}
			}
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-119804166-1',
				// Puts tracking script in the head instead of the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true
				// Avoids sending pageview hits from custom paths
				// exclude: ["/preview/**", "/do-not-track/me/too/"],
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/img/`,
				name: `img`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// Class prefix for <pre> tags containing syntax highlighting;
							// defaults to 'language-' (eg <pre class="language-js">).
							// If your site loads Prism into the browser at runtime,
							// (eg for use with libraries like react-live),
							// you may use this to prevent Prism from re-processing syntax.
							// This is an uncommon use-case though;
							// If you're unsure, it's best to use the default value.
							classPrefix: 'language-'
						}
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1200
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: ['Playfair+Display:300,400,400i,700', `source sans pro\:300,400,400i,700`]
			}
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `http://mariohernandez.io`
			}
		},
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-plugin-feed-generator'
	]
};
