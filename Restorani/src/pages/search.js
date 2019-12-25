import React from "react"
import Layout from "../components/layout/layout"
import WhiteBackground from "../components/background/whiteBackground"
import Restaurants from "../components/restoran"

const SearchPage = () => {

  return(
    <>
    <Layout>
      <WhiteBackground>
        <Restaurants></Restaurants>
      </WhiteBackground>
    </Layout>
  </>
  )
}

export default SearchPage