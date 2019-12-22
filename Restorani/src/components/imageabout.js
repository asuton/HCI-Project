import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "../styles/aboutus.module.css"
const ImageAbout = () => {
 var a=["https://github.com/git","https://hr-hr.facebook.com/fesb.hr"]
 var i=0
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "//images/about//" } }) {
        edges {
          node {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
  `)
  

  return ( 
         
        <div className ={styles.images} >
          {data.allFile.edges.map(({ node }) => (
            <div  className ={styles.image}>
            <a href={a[i++]} target="_blank"> <Img
                key={node.id}
                fluid={node.childImageSharp.fluid}
                alt=""
              />
              </a> 
            </div>
          ))}
        </div>
  
  )
}
export default ImageAbout