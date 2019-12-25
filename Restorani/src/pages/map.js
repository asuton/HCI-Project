//stranica s kartom koristi LeafletMap kompontentu kojoj prosljeđuje inicijalnu poziciju ucitavanja i zoom 
//s undenfined se provjerava da li se skripta izvodi u pregledniku pa ako je onda se primjenjuje leaflet komponenta

import React from "react"
import Layout from "../components/layout/layout"
import LeafletMap from "../components/leafletMap"


const MapPage = () => {
  return(
    <Layout>
        {typeof window !== 'undefined' &&
        <LeafletMap
          position = {[43.5081,16.4402]}
          zoom = {17}
        />
    }
    </Layout>
  )
}

export default MapPage