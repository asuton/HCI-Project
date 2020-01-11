import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import WhiteBackground from "../components/background/whiteBackground"
import BlogPosts from "../components/blogPosts"

export default ({
  data: {
    allMdx: { edges: posts }
  }
}) => {
  return (
    <Layout>
      <WhiteBackground>
        <br></br>
        <h2>Gastro blog</h2>
        <br></br>
        <BlogPosts posts={posts} />
      </WhiteBackground>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(filter: {frontmatter: {blog: {eq: "blog"}}}, sort: { fields: [frontmatter___datum], order: DESC }) {
      edges {
        node {
          body
          frontmatter {
            text
            title
            path
            date
          }
        }
      }
    }
  }
`