import React from "react"
import Layout from "../components/layout/layout"
import WhiteBackground from "../components/background/whiteBackground"
import Restorani from "../components/restaurants"

const SearchPage = () => {

  return(
    <>
    <Layout>
      <WhiteBackground>
        <Restorani></Restorani>
      </WhiteBackground>
    </Layout>
  </>
  )
}

export default SearchPage