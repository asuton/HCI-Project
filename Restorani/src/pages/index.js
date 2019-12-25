//pocetna stranica, sadrzi dvi kartice za preusmjeravanje na trazilicu ili kartu

import React from "react"
import LayoutIndex from "../components/layout/layoutIndex"
import Card from "../components/card"
import styles from "../styles/index.module.css"

//props1 i props2 podaci za kartice koji se iskoristavaju unutar card komponente
//koristi se spread operator ...props kako bi se omogucilo koristenje text, button i path unutar card komponente

let props1 = {
  text: 'Za pretraživanje restorana po nazivu ili jelima koja poslužuju',
  button: `Klikni ovdje`,
  path: '/search'
}

let props2 = {
  text: `Za pregled restorana u blizini preko karte`,
  button: `Klikni ovdje`,
  path: '/map'
}

const IndexPage = () => (
    <LayoutIndex>
      <div className = {styles.container}>
        <div className = {`row ${styles.row}`}>
          <Card {...props1}></Card>
          <Card {...props2}></Card>
        </div>
      </div>
    </LayoutIndex>
)

export default IndexPage