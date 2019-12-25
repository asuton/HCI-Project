//header komponenta koristena u layout komponenti

import React from "react"
import {graphql, useStaticQuery } from "gatsby"
import styles from '../../styles/header.module.css'
import StyledLinkB from '../links/styledLinkB'

import NavigationIndex from "../navigation/navigationIndex"

//header komponenta sadrzi naslov stranice koji je ujedno link za pocetnu stranicu
//implementira navigacijsku komponentu s linkovima

const Header = () => {
  //graphql upit dohvaca naslov
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