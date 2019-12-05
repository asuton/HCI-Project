import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from '../styles/header.module.css'

import Navigation from "./navigation"

//header komponenta sadrzi naslov stranice koji je ujedno link za pocetnu stranicu
//sadrzi Navigation komponentu

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
        <Navigation><Link to = "/" className = {styles.Title}>{data.site.siteMetadata.title}</Link></Navigation>
      </div>
    </header>
  )
}

export default Header