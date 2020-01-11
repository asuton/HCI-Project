import React from "react"
import {graphql, useStaticQuery } from "gatsby"
import styles from '../../styles/header.module.css'
import StyledLinkB from '../links/styledLinkB'
import Navigation from "../navigation/navigation"

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header>
      <div>
        <Navigation><StyledLinkB to = "/" className = {styles.Title}>{data.site.siteMetadata.title}</StyledLinkB></Navigation>
      </div>
    </header>
  )
}

export default Header