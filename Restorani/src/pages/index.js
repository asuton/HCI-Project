import React from "react"
import LayoutIndex from "../components/layout/layoutIndex"
import Card from "../components/card"
import styles from "../styles/index.module.css"

let props1 = {
  text: 'Za pretraživanje restorana po nazivu ili adresi',
  button: `Klikni ovdje`,
  path: '/search'
}

let props2 = {
  text: `Za pretraživanje restorana koristeći kartu`,
  button: `Klikni ovdje`,
  path: '/map'
}

const IndexPage = () => (
    <LayoutIndex>
      <div className = {styles.container}>
        <div className = {`row ${styles.row}`} style = {{marginRight: "0px", marginLeft: "0px"}}>
          <Card {...props1}></Card>
          <Card {...props2}></Card>
        </div>
      </div>
    </LayoutIndex>
)

export default IndexPage