const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const restaurantTemplate = path.resolve('src/templates/restaurant.js');  

  return graphql(`{
    allMdx {
      edges {
        node {
          body
          frontmatter {
            path
            name
            image
            address
            stars
          }
        }
      }
    }
  }`)
  .then(res => {
    if(res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMdx.edges.forEach(({node}) => {
      createPage({
        path: node.frontmatter.path,
        component: restaurantTemplate
      })
    })
  })
}