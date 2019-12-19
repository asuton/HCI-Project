//popis svih restorana

import React from "react"
import {graphql, useStaticQuery } from "gatsby"


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
          <Restaurant information = {information} />
  )
}

//Restaurant komponenta preko Restaurants dobiva information te zatim stvara novi niz
//niz se sastoji od kartica + informacija o pojedinom restoranu

const Restaurant = ({ information }) => {

  return(
    <>
    {information.map(restoran => (
      <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="..." class="card-img" alt="..."></img>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{restoran.name}</h5>
              <p class="card-text">{restoran.path}</p>
              <p class="card-text"><small class="text-muted">{restoran.address}</small></p>
            </div>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default Restaurants