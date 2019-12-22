//osnovne informacije o stranici

import React from "react"
import Layout from "../components/layout"
import WhiteBackground from "../components/whiteBackground"
import ImageAbout from "../components/imageabout"
import styles from "../styles/aboutus.module.css"


const AboutPage= () => (

    <Layout>
      <WhiteBackground>
        <div>
           <h1>About us</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           <h3>Find us at: </h3>
            <ImageAbout></ImageAbout>
    
          <div className ={styles.container}>
           
        </div>
       </div> 
      
     
     </WhiteBackground>
    </Layout>
)

export default AboutPage