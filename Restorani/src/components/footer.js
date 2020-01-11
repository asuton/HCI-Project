import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import styles from "../styles/footer.module.css"

const Footer = () => {
    
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
    return (
      <footer className = "page-footer font-small border-top border-dark" className = {styles.footer}>
        <div className = "footer-copyright text-center">
          <p className = {styles.position}>{data.site.siteMetadata.author} HCI 2019</p>
        </div>
      </footer>
    )
}

export default Footer 