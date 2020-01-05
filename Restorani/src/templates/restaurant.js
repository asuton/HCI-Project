import React from 'react';
import Layout from "../components/layout/layout"
import WhiteBackground from "../components/background/whiteBackground"
import RestaurantTemplateCard from "../components/restaurantTemplateCard"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Collapse from "../components/collapse"

//template za pojedine stranice restorana
//sadrzi karticu restorana i podatke iz mdx

export default function Template({data}) {
  const restaurant = data.mdx
  return (
    <Layout>
        <WhiteBackground>
          <RestaurantTemplateCard {...restaurant.frontmatter}></RestaurantTemplateCard>
          <MDXRenderer frontmatter={restaurant.frontmatter}>{restaurant.body}</MDXRenderer>
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