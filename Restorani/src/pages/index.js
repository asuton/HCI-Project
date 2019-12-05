import React from "react"
import Layout from "../components/layout"
import styles from "../styles/index.module.css"
import StyledLinkW from '../components/styledLinkW'

// sadrzi dvije kartice s linkovima prema restaurant i map

const IndexPage= () => (
    <Layout>
      <div className={styles.container}>     
        <div class="card-body" className={styles.card}>
          <h5 class="card-title" className={styles.text}>Za pretraživanje restorana po nazivu ili jelima koja poslužuju</h5>
          <button class="btn bbtn btn-danger btn-lg"><StyledLinkW to = '/restaurant'>Klikni ovdje</StyledLinkW></button>
        </div>
        <div class="card-body" className={styles.card}>
          <h5 class="card-title" className={styles.text}>Za pregled restorana u blizini preko karte</h5>
          <button class="btn btn btn-danger btn-lg"><StyledLinkW to = '/map'>Klikni ovdje</StyledLinkW></button>
        </div>
      </div> 
    

    </Layout>
)

export default IndexPage