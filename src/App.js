import React from "react"
//css
import "./App.css"

import {BrowserRouter} from "react-router-dom"

//import template
import Main from "./components/Structure/Main/Main";

class App extends React.Component{

  /* 
  IMPORTAT!!!!!!!
  For use the useNavigate from react-router-dom in APP is necesary:
  1- In the chidl component, in this case Main, import the navigate to component father (App).
  2- This navigate is a data that containt the import useNavigate in component Main.
  3- In component Main has a component Login, it the which send the parameter (navigate join data)
   through the function dataSend.

   This is a form the use the useNavigate in a functionComponent or extends in a class father.
  

  */

  validandoDatos = (datos,navigate) => {
    console.log('App',datos);
    window.localStorage.setItem('token',datos)
    navigate("/MenuAdministrador/QueryEmployee")
  }

  render(){

    return(
      <div>
       {/* <Grade/>*/ }
        <BrowserRouter>
         <Main dataSend={this.validandoDatos}/>
        </BrowserRouter>
       
      </div>
    )
    
  }

}

export default App;
