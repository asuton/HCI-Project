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
        text: "Blog",
        path: "/blog",
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
        name: "Bokamorra",
        stars: 3,
        address: "Trumbićeva obala 16, 21000, Split",
        image: "bokamorra.jpg",
        path: "/search/Bokamorra",
        coordinates: [
          43.50705579044621,
          16.432593762874603
        ]
      },
      {
        name: "Plan B",
        stars: 4,
        address: "Slobode ul. 16A, 21000, Split",
        image: "plan-b.jpg",
        path: "/search/PlanB",
        coordinates: [
          43.5090011373931,
          16.450223922729492
        ]
      },
      {
        name: "Basta",
        stars: 2,
        address: "Obala kneza Branimira BB, 21000, Split",
        image: "basta.jpg",
        path: "/search/Basta",
        coordinates: [
          43.50633405078391,
          16.43266350030899
        ]
      },
      {
        name: "Bokeria",
        stars: 5,
        address: "Domaldova ul. 8, 21000, Split",
        image: "bokeria.jpg",
        path: "/search/Bokeria",
        coordinates: [
          43.50952247972195,
          16.438371241092682
        ]
      },
      {
        name: "Apetit",
        stars: 3,
        address: "Ul. Pavla Šubića 5, 21000, Split",
        image: "apetit.jpg",
        path: "/search/Apetit",
        coordinates: [
          43.50858289309032,
          16.43815666437149
        ]
      },
      {
        name: "Kadena",
        stars: 4,
        address: "Ul. Ivana pl. Zajca 4, 21000, Split",
        image: "kadena.jpg",
        path: "/search/Kadena",
        coordinates: [
          43.50164739651514,
          16.459665298461914
        ]
      },
      {
        name: "Lučica",
        stars: 5,
        address: "Lučica 7, 21000, Split",
        image: "lucica.jpg",
        path: "/search/Lucica",
        coordinates: [
          43.51487570459075,
          16.416497826576233
        ]
      },
      {
        name: "Kitchen5",
        stars: 4,
        address: "Ul. Kraj Svete Marije 1, 21000, Split",
        image: "kitchen5.jpg",
        path: "/search/Kitchen5",
        coordinates: [
          43.50910034840709,
          16.43817275762558
        ]
      },
      {
        name: "Perivoj",
        stars: 5,
        address: "Slavićeva Ul. 44, 21000, Split",
        image: "perivoj.jpg",
        path: "/search/Perivoj",
        coordinates: [
          43.51389535299577,
          16.44090861082077
        ]
      },
      {
        name: "Movi",
        stars: 2,
        address: "Put Firula 47, 21000, Split",
        image: "movi.jpg",
        path: "/search/Movi",
        coordinates: [
          43.50167463424524,
          16.456108689308167
        ]
      },
      {
        name: "Makarun",
        stars: 3,
        address: "Marulićeva ul. 3, 21000, Split",
        image: "makarun.jpg",
        path: "/search/Makarun",
        coordinates: [
          43.50843310256541,
          16.4389505982399
        ]
      },
      {
        name: "Chops Grill",
        stars: 4,
        address: "Tončićeva ul. 4, 21000, Split",
        image: "chops.jpg",
        path: "/search/ChopsGrill",
        coordinates: [
          43.510183877688696,
          16.4372581243515
        ]
      },
      {
        name: "Galija",
        stars: 4,
        address: "Tončićeva ul. 12, 21000, Split",
        image: "galija.jpg",
        path: "/search/Galija",
        coordinates: [
          43.509987404343526,
          16.436756551265717
        ]
      },
      {
        name: "Uje Oil Bar",
        stars: 4,
        address: "Dominisova ul. 3, 21000, Split",
        image: "ujeBar.jpg",
        path: "/search/UjeOilBar",
        coordinates: [
          43.50895834043476,
          16.439782083034512
        ]
      },
      {
        name: "Duje",
        stars: 2,
        address: "Slobode ul. 16/A, 21000, Split",
        image: "duje.jpg",
        path: "/search/Duje",
        coordinates: [
          43.510129409894716,
          16.44979476928711
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [ `gatsby-remark-images` ],
        plugins: [ `gatsby-remark-images` ],
      },
    },
    {
      resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 600,
          }
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