//definira navbar za header index stranice
//iskorišten kod header komponente

import React from "react"
import {graphql, useStaticQuery } from "gatsby"
import styles from '../../styles/navigation.module.css'
import StyledLinkB from '../links/styledLinkB'

const Navigation = ({children}) => {  
  //grapqhl upit dohvaca menuItems iz gatsby-config.js
  //menuItems predstavljaju naziv i putanju do pojedinih js stranica
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuItems{
            text
            path
          }
        }
      }
    }
  `)

  //text i path od menuitemsa iz graphql upita spremaju se unutar menuItems
  const {menuItems} = data.site.siteMetadata
  
  //Navigation komponenta koja koristi NavLinks komponentu
  //prosljeduje se menuItems
  //bootstrap navbar 
  //link na naslov u headeru proslijeden kao children u Navigation komponenti i stavljen kao naslov navbara

  return (
    <nav className = "navbar navbar-expand-lg navbar-light bg-light fixed-top py-0 pl-2 border-bottom border-dark">
      {children}
      <button className = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarNavAltMarkup" aria-controls = "navbarNavAltMarkup" aria-expanded = "false" aria-label = "Toggle navigation">
        <span className = "navbar-toggler-icon"></span>
      </button>
      <div className = "collapse navbar-collapse" id = "navbarNavAltMarkup">
        <div className = "navbar-nav ml-auto"> 
          <NavLinks menuItems = {menuItems} />
        </div>
      </div>
    </nav>
  )
}

//NavLinks definiran unutar Navigation komponente koristi menuItems 
//stvara listu menuItem-a koji su NavLink komponente 
//svaki child mora imati jedinstveni key, a to je path jer je jedinstven 
//key je u komponenti zbog brzeg ucitavanja

const NavLinks = ({ menuItems }) => {
  
 const dat= menuItems.filter(
    (restoran)=>{
    return  restoran.text!="Restorani" && restoran.text!="U blizini" ;
    }
  
  )
  return(
    <>
    {dat.map(menuItem => (
        <NavLink key = {menuItem.path} to = {menuItem.path}>
          {menuItem.text}
        </NavLink>
      ))}
    </>
  )
}

//NavLink komponenta je link s definiranom kljucem i putanjom
//children je menuItem.text iz NavLinks
//...rest je key i putanja

const activeStyle = {
  color: 'red',
}

const NavLink = ({ children, ...rest }) => {
  return (
    <div className = {styles.linkContainer}>
      <StyledLinkB className = {styles.Link} activeStyle={activeStyle} {...rest}>{children}</StyledLinkB>
    </div>
  )
}

export default Navigation