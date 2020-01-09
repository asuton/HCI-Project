//login forma email+lozinka

import React from "react"
import Layout from "../components/layout/layout"
import styles from "../styles/login.module.css"
import {graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
const LoginPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuItems{
            text
            path
          }
        }
      }
    }
  `)

  //text i path od menuitemsa iz graphql upita spremaju se unutar menuItems
  const {menuItems } = data.site.siteMetadata;
  return(<>
  <Login data={menuItems}></Login>
  </>
)
  }
  class Login  extends React.Component{
    constructor(props){
      super(props);
      this.inf=this.props.data;
      this.state={
        active:true
      };
}

handleSubmit=(event)=>{
  
  event.preventDefault();
  this.setState({active: !this.state.active});
  this.inf[4].text="Profil"; 
  }

handleClick=()=>{
 
  if(window.confirm("Do you really want to Sign Out?"))
  { this.setState({active: !this.state.active});
    this.inf[4].text="Prijavi se";}

}


funkcija(){
      
  return(
      <>
      <Layout>
      {this.inf[4].text=="Prijavi se" ?
         <>
           <div  className={styles.display}  >
              <div className = {styles.container}>
                <h3 className = "pb-5">Prijavi se</h3>
                <form className = {styles.content} onSubmit={this.handleSubmit }>
                  <div className = " form-group">
                    <label for = "validationDefault01">Unesi e-mail adresu</label>
                    <input type = "email" className = "form-control form-control-lg" id = "validationDefault01" aria-describedby = "emailHelp" placeholder = "E-mail" required></input>
                  </div>
                  <div className = "form-group">
                    <label for = "validationDefault02">Unesi lozinku</label>
                    <input type = "password" className = "form-control form-control-lg" id = "validationDefault02" placeholder = "Lozinka" required></input>
                  </div>
                  <br></br>
                  <button type = "submit" className = {`btn btn-lg btn-danger ${styles.button}`}  >Prijavi se</button>
                  
                </form>
              </div>
            </div>
           </> :
          <>
            <div  className={styles.display}  >
              <div className = {styles.container}>
                <h3 className = "pb-5">Prijavljeni ste</h3>
                <form className = {styles.content}  >
                  <br></br>
                  <Link to="/" type = "button" className = {`btn btn-lg btn-danger ${styles.button}`} >OK</Link>
                 <br></br>
                 <br></br>
                 <br></br>
                 <button type = "button" className = {`btn btn-lg btn-danger ${styles.button}`} onClick={ this.handleClick}  >Odjavi se</button>
                </form>
              </div>
           </div>
          </>}
</Layout> </>
)}
     render(){
     
        return(
            <>
             {this.funkcija()}   
            </>
      )
    }
  }
  
export default LoginPage