import React from "react"
import {graphql, useStaticQuery } from "gatsby"
import styles from '../../styles/header.module.css'
import StyledLinkB from '../links/styledLinkB'
import NavigationIndex from "../navigation/navigationIndex"


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
        <NavigationIndex><StyledLinkB to = "/" className = {styles.Title}>{data.site.siteMetadata.title}</StyledLinkB></NavigationIndex>
      </div>
    </header>
  )
}

export default Header