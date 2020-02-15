import React from "react"
import {graphql, useStaticQuery } from "gatsby"
import RestaurantCard from "./restaurantCard"
import styles from "../styles/restaurantCard.module.css"

const Restorani = () => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          information {
            address
            name
            stars
            path
            image
          }
        }
      }
    }
  `)
  const {information} = data.site.siteMetadata;
  return( <Restaurants data={information}></Restaurants>)

}

class Restaurants extends React.Component {  
  constructor(props){
         super(props);
         this.inf=this.props.data;
         this.state={
           search: ''
         };

  }
  
  page(){
    var filtrirano=this.inf.filter(
      (restoran)=>{
      return restoran.name.toLowerCase().indexOf(this.state.search.toLowerCase())!=-1 ||restoran.address.toLowerCase().indexOf(this.state.search.toLowerCase())!=-1 ;
      }
        )
        return(
        <>
          <div className = {styles.name}>
             <Restaurant information = {filtrirano} />
          </div>
        </>)
       
      }
    
 handleClick = (order) => {
     if(order==1)
         this.setState({inf:this.inf.sort((a, b) =>  (a.stars > b.stars) ? -1 : 1)}) 
     else 
        this.setState({inf:this.inf.sort((a, b) =>  (a.name > b.name) ? 1 : -1) }) 
     
   
  }
 
 updateSearch=(event)=>{
    this.setState({search:event.target.value});

}
  render(){

  return (
    <>
    <div className={styles.FilterandSearch}>
      <input className = {styles.search} type="text" placeholder="Pretraži restorane" value={this.state.search} onChange={this.updateSearch} />
      <div className="dropdown">
        <button className={`btn btn-outline-secondary btn-lg dropdown-toggle`} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sortiraj
        </button>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
          <button className="dropdown-item" onClick={() => { this.handleClick('1') } } type="button">Sortiraj po ocjeni</button>
          <button className="dropdown-item" onClick={() => { this.handleClick('2') } } type="button">Sortiraj po abecedi</button>
        </div>
      </div>
    </div>
      {this.page()}    
        </>
  )
  }
}

class Restaurant  extends React.Component{
  
  render(){
  
      return(
          <>
            {this.props.information.map(restoran => (
              <RestaurantCard  key = {restoran.path} {...restoran}></RestaurantCard>    
            ))}
          </>
    )
  }
}

export default Restorani