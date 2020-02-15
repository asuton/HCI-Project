import React from "react"
import Layout from "../components/layout/layout"
import styles from "../styles/login.module.css"
import {graphql, useStaticQuery } from "gatsby"
import WhiteBackground from "../components/background/whiteBackground"
import UserReview from "../components/userReview"

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
 
  if(window.confirm("Jeste li sigurni da se želite odjaviti?"))
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
                  <button type = "submit" className = {`btn btn-lg btn-danger ${styles.button}`} >Prijavi se</button>
                </form>
              </div>
            </div>
           </> :
          <>
            <WhiteBackground>
              <br></br>
              <div>
                <h3 className = "pb-3">Prijavljeni ste</h3>
                <button type = "button" className = {`btn btn-lg btn-danger`} onClick={this.handleClick}>Odjavi se</button>
              </div>
              <br></br>
              <br></br>
              <h4>Korisnički račun:</h4>
              <br></br>
              <h5 style = {{paddingLeft: "5%"}}>Ime: Korisnik</h5>
              <h5 style = {{paddingLeft: "5%"}}>E-mail: korisnik@mail.hr</h5>
              <br></br>
              <br></br>
              <h4>Dosad ostavljene recenzije:</h4>
              <br></br>
              <UserReview name = {"Kadena"} 
                          text = {"Vrhunski ambijent i hrana"}
                          date = {"09.01.2020"}
                          grade = {"4"}></UserReview>
              <UserReview name = {"Uje Oil Bar"} 
                          text = {"Poštovani, uzimajući u obzir konkurenciju sličnog cjenovnog razreda, u popriličnoj ste fiskalno-kvantitativnoj disproporciji (procijenjeno kroz nekoliko posjeta) te ovom politikom nećete steći redovnu klijentelu."}
                          date = {"02.01.2020"}
                          grade = {"3"}></UserReview>
            </WhiteBackground>
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