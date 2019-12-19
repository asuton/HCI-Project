//card komponenta koristena na pocetnoj stranici --> index.js

import React from 'react'
import styles from "../styles/card.module.css"
import StyledLinkW from "./styledLinkW"

//destrukturiranje props varijable na tekst kartice, link i tekst botuna

const Card = ({text, path, button}) => {
    return(
    <div className="col-md-5 my-3">
        <div className={`card my-3 ${styles.card}`}>
          <div className={`card-body text-center ${styles.content}`}>
            <h3 className="card-title">{text}</h3>
            <button class="btn btn-lg btn-danger"><StyledLinkW to={path}>{button}</StyledLinkW></button>
          </div>
        </div>
     </div>
    )
}

export default Card