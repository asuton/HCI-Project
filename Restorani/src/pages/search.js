import React from "react"
import Layout from "../components/layout"
import WhiteBackground from "../components/whiteBackground"
import Restaurants from "../components/restoran"

const SearchPage= () => {

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