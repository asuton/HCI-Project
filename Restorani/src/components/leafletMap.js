import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/leafletMap.css'
import {graphql, useStaticQuery } from "gatsby"
import StyledLinkB from "./links/styledLinkB"


class LeafletMap extends React.Component {

  render() {
      return (
        <Map center = {this.props.position} zoom = {this.props.zoom}>
          <TileLayer
            url = "https://api.mapbox.com/styles/v1/asuton/ck1wbf5ge0gsx1cp7jksevnea/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXN1dG9uIiwiYSI6ImNqdGJidW9sZTBlNm4zeW56djRxODdtMnkifQ.22Y2qFashDLW4lbkedxKeA"
            attribution = "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.props.markerText !== "" &&
          <Markers></Markers>
          }
        </Map>
      );
  }
}

const Markers = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          information {
            address
            coordinates
            name
            path
          }
        }
      }
    }
  `)

  const {information} = data.site.siteMetadata

  return(
    <>
    {information.map(restoran => (
      <Marker key = {restoran.coordinates} position = {restoran.coordinates}>
        <Popup>
          <StyledLinkB to = {restoran.path}><div>{restoran.name}</div></StyledLinkB>
          <div>{restoran.address}</div>
        </Popup>
      </Marker>
      ))}
    </>
  )
}

export default LeafletMap