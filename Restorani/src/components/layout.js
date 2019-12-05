/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 *
 */

import React from "react"
import Helmet from "react-helmet"


import Header from "./header"
import Footer from "./footer"
import StyledBackgroundSection from "./background"


//(props) ili ({children}) jsx za elemente unutar layout tag-a
const Layout = ({ children }) => {  
  //prikazuje header, sadrzaj sa stranica koje koriste Layout komponentu {children}, footer
  //StyledBackgroundSection koristi taj sadrzaj i smjesta ga prema pozadinskoj slici
  return(
    <>
    <Helmet>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    </Helmet>
    <Header></Header>
    <StyledBackgroundSection>
      <main>
        {children}
      </main>
    </StyledBackgroundSection>
    <Footer></Footer>
    </>
  )
}

export default Layout
