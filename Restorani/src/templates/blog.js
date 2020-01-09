import React from "react"
import Layout from "../components/layout/layout"
import WhiteBackground from "../components/background/whiteBackground"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({data})  => {
    const blog = data.mdx
    return (
        <Layout>
            <WhiteBackground>
                <MDXRenderer>{blog.body}</MDXRenderer>
            </WhiteBackground>
        </Layout>
    )
}

export const blogQuery =  graphql`
query blogByPath($path: String!) {
  mdx(frontmatter: { path: { eq: $path} }) {
    body
    frontmatter {
      path
      title
    }
  }
}
`