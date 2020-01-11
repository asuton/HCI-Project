import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/aboutus.module.css"

const ImageAbout = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "//images/about//" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 50 maxHeight: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  

  return ( 
        <Social data = {data}/>
  )
}

const Social = ({data}) => {
  var a = ["https://hr-hr.facebook.com/fesb.hr", "https://github.com/github", "https://www.google.com/intl/hr/gmail/about/#", "https://twitter.com/hashtag/fesb?lang=en"]
  var i = 0
  return(
      <div className = {styles.images} >
        {data.allFile.edges.map(({ node }) => (
        <div className = {styles.image}>
          <a href = {a[i++]} target = "_blank"> 
          <Img
            key = {node.id}
            fluid = {node.childImageSharp.fluid}
            alt = ""
          />
          </a> 
          </div>
        ))}
      </div>
      )
}

export default ImageAbout