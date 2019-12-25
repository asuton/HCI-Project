//login forma email+lozinka

import React from "react"
import Layout from "../components/layout/layout"
import styles from "../styles/login.module.css"
import StyledLinkW from "../components/links/styledLinkW"

const LoginPage = () => (
  <Layout>
    <div className = {styles.display}>
      <div className = {styles.container}>
        <h3 className = "pb-5">Prijavi se</h3>
        <form className = {styles.content}>
          <div className = " form-group">
            <label for = "exampleInputEmail1">Unesi e-mail adresu</label>
            <input type = "email" className = "form-control form-control-lg" id = "exampleInputEmail1" aria-describedby = "emailHelp" placeholder = "E-mail"></input>
          </div>
          <div className = "form-group">
            <label for = "exampleInputPassword1">Unesi lozinku</label>
            <input type = "password" className = "form-control form-control-lg" id = "exampleInputPassword1" placeholder = "Lozinka"></input>
          </div>
          <br></br>
          <StyledLinkW to = '/'><button type = "submit" className = {`btn btn-lg btn-danger ${styles.button}`}>Prijavi se</button></StyledLinkW>
        </form>
      </div>
    </div>
  </Layout>
)

export default LoginPage