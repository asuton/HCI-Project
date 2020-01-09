const path = require('path');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const restaurantTemplate = path.resolve('src/templates/restaurant.js');  
  const blogTemplate = path.resolve('src/templates/blog.js');  

  return graphql(`{
    allMdx {
      edges {
        node {
          body
          frontmatter {
            path
            blog
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
      if(node.frontmatter.blog === "blog"){
        createPage({
          path: node.frontmatter.path,
          component: blogTemplate
      })}
      else{
        createPage({
          path: node.frontmatter.path,
          component: restaurantTemplate
      })}
    })
  })
}