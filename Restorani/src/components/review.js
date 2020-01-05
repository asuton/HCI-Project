import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/review.module.css"
import RestaurantImage from "../components/imagerestaurant"

//recenzije koje se prikazuju na pojedinim stranicama
//treba do kraja sredit izgled i sredit da prima props 

const Review = () => {
    let stars = 4
    let icon = <FontAwesomeIcon icon = "star" className = {`fa-lg ${styles.stars}`}/>
    let a = [];
    for(let i = 0 ; i <stars ; i++)
      a.push(icon);

    return(
        <div class="row">
            <div class="col-sm-2">
                <div className = {styles.image}>
                    <RestaurantImage filename = "basta.jpg"></RestaurantImage>
                </div>
            </div>
            <div class="col-sm-10">
                <div class={`card ${styles.review}`}>
                    <div className={`${styles.header} card-header`}>
                        <h4>Natko Drnas</h4>
                        <p className = "card-text">{a}</p>
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>Kvalitetna pizza, super atmosfera kako za parove tako za ekipu, ljubazno osoblje ali jako visoke cijene.</p>
                            <footer class="blockquote-footer">25.11.2019.</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review