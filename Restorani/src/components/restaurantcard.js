//card komponenta koristena u komponenti restaurant.js

import React from 'react'
import styles from "../styles/restaurantCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../components/fontawesome.js"
import RestaurantImage from "../components/imagerestaurant"
import StyledLinkB from "./links/StyledLinkB"

//pomocu FontAwesome se definiraju zvjezdice
//niz a sadrzi broj zvjezdica koji je dobiven preko stars 

const RestaurantCard = ({name, image, stars, address, path}) => {

    let icon = <FontAwesomeIcon icon = "star" className = {`fa-lg ${styles.star}`}/>
    let a = [];
    for(let i = 0 ; i <stars ; i++)
      a.push(icon);
        
    return(
        <div className = "card mt-3">
          <div className = "row no-gutters">
            <div className = {`${styles.image} col-md-4`}>
              <RestaurantImage filename = {image}/>
            </div>
            <div className = "col-md-8" >
              <div className = {`card-body ${styles.content}`}>
                <StyledLinkB to = {path}><h5 className = {`${styles.title} card-title`}>{name}</h5></StyledLinkB>
                <p className = {`${styles.stars} card-text`}>{a}</p>
                <p className = "card-text"><small className = "text-muted">{address}</small></p>
              </div>
            </div>
          </div>
        </div>
      )  
}

export default RestaurantCard