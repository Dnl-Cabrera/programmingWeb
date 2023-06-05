import React from "react"
//css
import "./App.css"

import {BrowserRouter} from "react-router-dom"

//import template
import Main from "./components/Structure/Main/Main";

import MenuAdministrator from "./components/Template/MenuAdministrator/MenuAdministrator";

class App extends React.Component{

  render(){
    return(
      <div>
       {/* <Grade/>*/ }
        <BrowserRouter>
         {/* <Main/>*/}
          <MenuAdministrator/>
        </BrowserRouter>
       
      </div>
    )
    
  }

}

export default App;
