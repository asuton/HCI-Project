//leaflet komponenta s kojom se definira prostor za kartu
//map komponenta definira div karte te poziciju sloja koji se koristi
//tile layer komponenta sluzi za definiranje sloja --> koristi se mapbox
//koristen kod map.js stranice

import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../styles/leafletMap.css'
import {graphql, useStaticQuery } from "gatsby"


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

//Markers komponenta preko graphqla dobiva lokacije restorana
//predstavlja niz Marker komponenti s kojima se postavljaju markeri na kartu

const Markers = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          information {
            address
            coordinates
            name
          }
        }
      }
    }
  `)

  const {information} = data.site.siteMetadata

  return(
    <>
    {information.map(restoran => (
      <Marker position = {restoran.coordinates}>
        <Popup>
          <div>{restoran.name}</div>
          <div>{restoran.address}</div>
        </Popup>
      </Marker>
      ))}
    </>
  )
}

export default LeafletMap