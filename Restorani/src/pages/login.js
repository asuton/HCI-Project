//login forma email+lozinka

import React from "react"
import Layout from "../components/layout/layout"
import styles from "../styles/login.module.css"

const LoginPage = () => (
  <Layout>
    <div className = {styles.display}>
      <div className = {styles.container}>
        <h3 className = "pb-5">Prijavi se</h3>
        <form className = {styles.content}>
          <div className = " form-group">
            <label for = "validationDefault01">Unesi e-mail adresu</label>
            <input type = "email" className = "form-control form-control-lg" id = "validationDefault01" aria-describedby = "emailHelp" placeholder = "E-mail" required></input>
          </div>
          <div className = "form-group">
            <label for = "validationDefault02">Unesi lozinku</label>
            <input type = "password" className = "form-control form-control-lg" id = "validationDefault02" placeholder = "Lozinka" required></input>
          </div>
          <br></br>
          <button type = "submit" className = {`btn btn-lg btn-danger ${styles.button}`}>Prijavi se</button>
        </form>
      </div>
    </div>
  </Layout>
)

export default LoginPage