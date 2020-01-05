import React from 'react'
import styles from '../styles/collapse.module.css'

//collapse koristen za jelovnike u mdx datotekama
//prima ime restorana, hranu i cijene kao children te da li je inicijalno otvoren ili ne

const Collapse = ({name, open, children}) => {
    
    
    return(

        <div class="accordion">
            <div class="card">
                <div class="card-header" id={`heading${name}`}>
                    <h2 class="mb-0">
                        <button class="btn btn-link collapsed"  style = {{color: 'crimson'}} type="button" data-toggle="collapse" data-target={`#${name}`} aria-expanded="false">
                            {name}
                        </button>
                    </h2>
                </div>
                <div id={`${name}`} class={`${open}`}>
                    <div class={`card-body px-1 ${styles.content}`}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collapse