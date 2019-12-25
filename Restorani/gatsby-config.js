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
    menuItemsIndex: [
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
        name: "Bokamorra",
        stars: 3,
        address:"Trumbićeva obala 16, 21000, Split",
        path: "bokamorra.jpg",
        coordinates: [
          43.50705579044621,
          16.432593762874603
        ]
      },
      {
        name: "Plan B",
        stars: 4,
        address: "Slobode ul. 16A, 21000, Split",
        path: "plan-b.jpg",
        coordinates: [
          43.5090011373931,
          16.450223922729492
        ]
      },
      {
        name: "Basta",
        stars: 2,
        address: "Obala kneza Branimira BB, 21000, Split",
        path: "basta.jpg",
        coordinates: [
          43.50633405078391,
          16.43266350030899
        ]
      },
      {
        name: "Bokeria",
        stars: 5,
        address: "Domaldova ul. 8, 21000, Split",
        path: "bokeria.jpg",
        coordinates: [
          43.50952247972195,
          16.438371241092682
        ]
      },
    ],
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
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