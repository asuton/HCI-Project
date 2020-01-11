import React from 'react'
import styles from "../styles/card.module.css"
import StyledLinkW from "./links/styledLinkW"


const Card = ({text, path, button}) => {
    return(
    <div className = "col-md-5 my-3">
        <div className = {`card my-3 ${styles.card}`}>
          <div className = {`card-body text-center ${styles.content}`}>
            <h3 className = "card-title">{text}</h3>
            <StyledLinkW to = {path}><button className = {`btn btn-lg btn-danger ${styles.button}`}>{button}</button></StyledLinkW>
          </div>
        </div>
     </div>
    )
}

export default Card