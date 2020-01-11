import React from 'react'
import styles from '../styles/collapse.module.css'

const Collapse = ({name, open, children}) => {
     
    return(

        <div className="accordion">
            <div className="card">
                <div className={`card-header ${styles.header}`} data-toggle="collapse" data-target={`#${name}`} id={`heading${name}`}>
                    <h2 className="mb-0">
                        <button className={`btn btn-link collapsed ${styles.btnLink}`}  style = {{color: 'crimson'}} type="button" data-toggle="collapse" data-target={`#${name}`} aria-expanded="false">
                            <h5 className={styles.heading}>{name}</h5>
                        </button>
                    </h2>
                </div>
                <div id={`${name}`} className={`${open}`}>
                    <div className={`card-body px-1 ${styles.content}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collapse