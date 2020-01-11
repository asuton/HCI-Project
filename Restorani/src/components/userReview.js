import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "../styles/review.module.css"
import StyledLinkB from "./links/styledLinkB"

const UserReview = ({name, grade, text, date}) => {
    let stars = grade
    let icon = <FontAwesomeIcon icon = "star" className = {`${styles.stars}`}/>
    let a = [];
    for(let i = 0 ; i <stars ; i++)
      a.push(icon);
      
    return(
        <div class="row pb-2">
            <div class="col-sm-12">
                <div class={`card ${styles.review}`}>
                    <div className={`${styles.header} card-header`}>
                        <StyledLinkB to = {`/search/${name.replace(/\s/g, '')}`}><h4>Restoran {name}</h4></StyledLinkB> 
                        <p className = "card-text">Ocjena: {a}</p>
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p className = {styles.font}>{text}</p>
                            <footer class="blockquote-footer">{date}</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserReview