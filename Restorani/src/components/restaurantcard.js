import React from 'react'
import styles from "../styles/restaurantCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../components/fontawesome.js"
import RestaurantImage from "../components/imagerestaurant"
import StyledLinkB from "./links/StyledLinkB"
import {Link} from 'gatsby'
 

const RestaurantCard = ({name, image, stars, address, path}) => {

    let icon = <FontAwesomeIcon icon = "star" className = {`fa-lg ${styles.star}`}/>
    let a = [];
    for(let i = 0 ; i <stars ; i++)
      a.push(icon);
        
    return(
        <div className = "card mt-3">
          <div className = "row no-gutters">
            <div className = {`${styles.image} col-md-4`}>
              <Link to = {path}><RestaurantImage filename = {image}/></Link>
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