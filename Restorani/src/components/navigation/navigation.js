import React from "react"
import {graphql, useStaticQuery } from "gatsby"
import styles from '../../styles/navigation.module.css'
import StyledLinkB from '../links/styledLinkB'

const Navigation = ({children}) => {  
  
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

  const {menuItems} = data.site.siteMetadata

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

const NavLinks = ({ menuItems }) => {
  return(
    <>
    {menuItems.map(menuItem => (
        <NavLink key = {menuItem.path} to = {menuItem.path}>
          {menuItem.text}
        </NavLink>
      ))}
    </>
  )
}

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