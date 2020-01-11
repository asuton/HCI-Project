import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, children }) => (
  <StaticQuery
    query = {graphql`
      query {
        desktop: file(relativePath: { eq: "food.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render = {data => {

      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag = "section"
          className = {className}
          fluid = {imageData}
          backgroundColor = {`#040e18`}
        >
        {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  min-width: 100%;
  padding-top: 64px;
  min-height: 100vh;
  position: absolute;
  background-size: cover;
  background-position: 50% 50%;
`

export default StyledBackgroundSection