import React from 'react';
import Layout from "../components/layout/layout"
import WhiteBackground from "../components/background/whiteBackground"
import RestaurantTemplateCard from "../components/restaurantTemplateCard"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from 'gatsby'
import styles from "../styles/arrow.module.css"

//template za pojedine stranice restorana
//sadrzi karticu restorana i podatke iz mdx

export default function Template({data}) {
  const restaurant = data.mdx
  return (
    <Layout>
        <WhiteBackground>
          <RestaurantTemplateCard {...restaurant.frontmatter}></RestaurantTemplateCard>
          <MDXRenderer frontmatter={restaurant.frontmatter}>{restaurant.body}</MDXRenderer>
          <br></br>
          <br></br>
          <Link to = "/search" className = {styles.link}>
              <button type="button" className="btn btn-light" style={{backgroundColor: 'white', borderColor: 'white'}}>
                <span className = {styles.arrow}></span>
                <span className = {styles.font}>Natrag na restorane</span>
              </button>
          </Link>
        </WhiteBackground>
    </Layout>
  )
}

export const restaurantQuery = graphql`
  query restaurantByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path} }) {
      body
      frontmatter {
        path
        name
        stars
        address
        image
      }
    }
  }
`