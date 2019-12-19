//definirana stilizirana pozadinska slika

import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

//BackGroundSection dobiva sadrzaj iz Layouta
//preko graphql upita dohvaca fluidnu sliku
const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "food.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {

      //Definirana pozadinska slika i smjesten sadrzaj iz layouta kao children

      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
        {children}
        </BackgroundImage>
      )
    }}
  />
)

//stvaranje stilizirane pozadinske slike s iducim svojstvima

const StyledBackgroundSection = styled(BackgroundSection)`
  min-width: 100%;
  padding-top: 64px;
  min-height: 100vh;
  position: absolute;
`

export default StyledBackgroundSection