import React from 'react'
import styles from '../../styles/whiteBackground.module.css'

const WhiteBackground = ({children}) => {
    return(
        <div className = {styles.white}>{children}</div>
    )
}

export default WhiteBackground