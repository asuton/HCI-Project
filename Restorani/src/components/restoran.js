//popis svih restorana

import React from "react"
import {graphql, useStaticQuery } from "gatsby"
import RestaurantCard from "../components/restaurantcard"
import styles from "../styles/restaurant.module.css"


const Restaurants = () => {  
  //grapqhl upit dohvaca information iz gatsby-config.js
  //information - podaci o restoranima

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          information {
            address
            name
            stars
            path
          }
        }
      }
    }
  `)

  //address, name, stars i path iz graphql upita spremaju se unutar information

  const {information} = data.site.siteMetadata

  return (
        <div className = {styles.name}>
          <Restaurant information = {information} />
        </div>
  )
}

//Restaurant komponenta preko Restaurants dobiva information te zatim stvara novi niz
//niz se sastoji od RestaurantCard komponenti

const Restaurant = ({ information }) => {

  return(
    <>
    {information.map(restoran => (
      <RestaurantCard  key = {restoran.path} {...restoran}></RestaurantCard>    
    ))}
    </>
  )
}

export default Restaurants