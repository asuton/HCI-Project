import React from 'react'
import {graphql, useStaticQuery } from "gatsby"
import Review from "../components/review"
//import styles from "../styles/review.module.css"
import styles from "../styles/commentbox.module.css"


const Page = () => {
   

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
    <CommentBox data={menuItems}></CommentBox>
    </>
  )
  
    }
    class CommentBox  extends React.Component{
    
       
      constructor(props){
        super(props);
        this.inf=this.props.data;
        this.Grade='1'
       
        
        this.state={
            search:''
          };
          this.state={
            grade1:'1'
          };
          this.state={
            komentar:''
          };
         
          this.state={
            a:'2'
          };
         this.state={
            stil:"{styles.stars}"
         }
        this.state={
          flag:[0,0,0,0,0]
        }     

  }
 
 
updateSearch=(event)=>{
    this.setState({search:event.target.value});
}


Popup=(event)=>{
    if(this.inf[4].text=='Prijavi se')
            alert( this.inf[4].text)
}  
  
submit=(event)=>{
    if(this.state.search=='')
        alert("ne mozete prazan komentar napisat")
    else
     {this.setState({a:'1'})
      this.setState({komentar:this.state.search})
      this.setState({search:''})
     }
}
handleClick=(number)=>{
 
  this.Grade=number
   const newIds= this.state.flag.slice()
   for(let i=0;i<5;i++)
   {  if(i==number-1)
        newIds[i]=1;
      else
      newIds[i]=0;

   }
   this.setState({flag:newIds})
}


 Funkcija(){
        
    return(
        <>
         <div >
         
        <p  className = {styles.text}>Ostavite recenziju</p>
        <div className={styles.display}>
        <p >Ocijenite restoran</p>
        <p  className = {styles.len} style={this.state.flag[0]==0? {fontWeight: 'normal'}:{fontWeight:'bold'}} onClick={() => { this.handleClick('1') }}>1</p>
        <p className = {styles.len} style={this.state.flag[1]==0? {fontWeight: 'normal'}:{fontWeight:'bold'}} onClick={() => { this.handleClick('2') }}>2</p>
        <p  className = {styles.len} style={this.state.flag[2]==0? {fontWeight: 'normal'}:{fontWeight:'bold'}} onClick={() => { this.handleClick('3') }}>3</p>
        <p className = {styles.len} style={this.state.flag[3]==0? {fontWeight: 'normal'}:{fontWeight:'bold'}} onClick={() => { this.handleClick('4') } }>4</p>
        <p className = {styles.len}  style={this.state.flag[4]==0? {fontWeight: 'normal'}:{fontWeight:'bold'}} onClick={() => { this.handleClick('5') }}>5</p>
        </div>
         <input  className = {styles.komentar} type="text" placeholder='Ovdje unesite svoj dozivljaj' value={this.state.search} onClick={this.Popup} onChange={this.updateSearch} />
         <br></br>
        <button className = {`btn btn-lg btn-danger ${styles.botun}`}  onClick={this.submit}>submit</button>
        </div>
     
       
        </>
  )}
       render(){
       
          return(
              <>
               {this.Funkcija()}  
               {this.state.a == 1? <Review name = {"Korisnik"} 
        text = {this.state.komentar}
        date = {"16.12.2019"}
        grade = {this.Grade}></Review> : <></>} 
      

              </>
        )
      }
    }
    
  export default Page