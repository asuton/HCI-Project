//header komponenta koristena u layout komponenti

import React from "react"
import {graphql, useStaticQuery } from "gatsby"
import styles from '../styles/header.module.css'
import StyledLinkB from './styledLinkB'

import Navigation from "./navigation"

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
        <Navigation><StyledLinkB to = "/" className = {styles.Title}>{data.site.siteMetadata.title}</StyledLinkB></Navigation>
      </div>
    </header>
  )
}

export default Header