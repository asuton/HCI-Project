import React from 'react'
import styles from "../styles/RestaurantTemplateCard.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../components/fontawesome.js"
import RestaurantImage from "../components/imagerestaurant"

const RestaurantTemplateCard = ({name, image, stars, address}) => {

    let icon = <FontAwesomeIcon icon = "star" className = {`fa-lg ${styles.star}`}/>
    let a = [];
    for(let i = 0 ; i <stars ; i++)
      a.push(icon);
        
    return(
        <div className = {`${styles.card} card mt-3`}>
          <div className = "row no-gutters">
            <div className = {`${styles.image} col-md-6`}>
              <RestaurantImage filename = {image}/>
            </div>
            <div className = "col-md-6" >
              <div className = {`card-body ${styles.content}`}>
                <h5 className = {`${styles.title} card-title`}>{name}</h5>
                <p className = {`${styles.stars} card-text`}>{a}</p>
                <p className = {`card-text text-muted ${styles.text}`}>{address}</p>
              </div>
            </div>
          </div>
        </div>
      )  
}

export default RestaurantTemplateCard