import React from "react"
import Helmet from "react-helmet"
import HeaderIndex from "../header/headerIndex"
import Footer from "../footer"
import StyledBackgroundSection from "../background/background"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const LayoutIndex = ({ children }) => {  
  return(
    <>
    <Helmet>
      <meta content="width=device-width, initial-scale=1" name = "viewport" />
    </Helmet>
    <HeaderIndex></HeaderIndex>
    <StyledBackgroundSection>
      <main>
        {children}
      </main>
    </StyledBackgroundSection>
    <Footer></Footer>
    </>
  )
}

export default LayoutIndex