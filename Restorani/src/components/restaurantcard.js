//card komponenta koristena u komponenti restaurant.js

import React from 'react'
import styles from "../styles/restaurant.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../components/fontawesome.js"
import RestaurantImage from "../components/imagerestaurant"



const RestaurantCard = ({name, path, stars,address}) => {
 var icon= <FontAwesomeIcon icon="star" className="styles.star" />
    var a=[];
    for(var i=0;i<stars;i++)
        a.push(icon);
        
    return(
        <div class= "card mb-3">
        <div class="row no-gutters">
          <div className={` ${styles.image} col-md-4`}>
          <RestaurantImage  filename={path} />
          </div>
          <div class="col-md-8" >
            <div class="card-body">
              <h5 className={` ${styles.title} card-title`} >{name}</h5>
              <p class={` ${styles.stars} card-text`}>{a}</p>
              <p class="card-text"><small class="text-muted">{address}</small></p>
            </div>
          </div>
        </div>
      </div>
    )
    
}

export default RestaurantCard