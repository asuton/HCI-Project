module.exports = {
  siteMetadata: {
    title: `Naslov`,
    description: ``,
    author: `Anita Suton & Ela Vujasin`,
    menuItems: [
      {
        text: "Restorani",
        path: "/search",
      },
      {
        text: "U blizini",
        path: "/map",
      },
      {
        text: "O aplikaciji",
        path: "/about",
      },
      {
        text: "Prijavi se",
        path: "/login",
      },
    ],
    background: `../images/food.png`,
    information: [
      {
        name: "bokamora",
        stars: 3,
        address: "adresabokamora",
        path: "../images/food.png",
      },
      {
        name: "plan b",
        stars: 4,
        address: "adresaplanb",
        path: "../images/gatsby-astronaut.png",
      },
      {
        name: "basta",
        stars: 2,
        address: "adresabasta",
        path: "../images/gatsby-icon.png",
      },
    ],
    location: [
      {
        name: "Basta",
        address: "Obala kneza Branimira BB, 21000, Split",
        coordinates: [
          43.50633405078391,
          16.43266350030899
        ]
      },
      {
        name: "Bokamora",
        address: "Trumbićeva obala 16, 21000, Split",
        coordinates: [
          43.50705579044621,
          16.432593762874603
        ]
      },
      {
        name: "Plan B",
        address: "Slobode ul. 16A, 21000, Split",
        coordinates: [
          43.5090011373931,
          16.450223922729492
        ]
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
