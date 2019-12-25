//div za sadrzaj koristen search.js, about.js i restaurant.js
//unutar njega se postavlja sadrzaj

import React from 'react'
import styles from '../../styles/whiteBackground.module.css'

const WhiteBackground = ({children}) => {
    return(
        <div className = {styles.white}>{children}</div>
    )
}

export default WhiteBackground