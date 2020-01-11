import React from "react"
import Layout from "../components/layout/layout"
import WhiteBackground from "../components/background/whiteBackground"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from 'gatsby'
import styles from "../styles/arrow.module.css"

export default ({data})  => {
    const blog = data.mdx
    return (
        <Layout>
            <WhiteBackground>
              <div style = {{fontSize: "1.1rem"}}>
                <MDXRenderer>{blog.body}</MDXRenderer>
              </div>
                <br></br>
                <Link to = "/blog" className = {styles.link}>
                  <button type="button" className="btn btn-light" style={{backgroundColor: 'white', borderColor: 'white'}}>
                    <span className = {styles.arrow}></span>
                    <span className = {styles.font}>Natrag na članke</span>
                  </button>
                </Link>
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
      date
    }
  }
}
`