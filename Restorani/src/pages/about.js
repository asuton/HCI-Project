//osnovne informacije o stranici

import React from "react"
import Layout from "../components/layout/layout"
import WhiteBackground from "../components/background/whiteBackground"
import ImageAbout from "../components/imageabout"
import styles from "../styles/aboutus.module.css"

let about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, 
qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora 
incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`

let app = `Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. 
Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, 
suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. 
Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 
Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. 
Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. 
Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. 
Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, 
sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia 
Curae; Morbi lacinia molestie dui.`

let contact = `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint 
occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, 
id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat 
facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`

const AboutPage = () => (

    <Layout>
      <WhiteBackground>
        <div>
          <h2>O nama</h2>
          <p>{about}</p>
          <h2>O aplikaciji</h2>
          <p>{app}</p>
          <h2>Kontaktirajte nas:</h2>
          <p>{contact}</p>
          <ImageAbout></ImageAbout>
        </div> 
      </WhiteBackground>
    </Layout>
)

export default AboutPage