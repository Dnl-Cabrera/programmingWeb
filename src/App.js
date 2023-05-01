import React from "react"
//css
import "./App.css"

import {BrowserRouter} from "react-router-dom"

//import template
import Main from "./components/Structure/Main/Main";

class App extends React.Component{

  render(){
    return(
      <div>
       {/* <Grade/>*/ }
       <BrowserRouter>
        <Main/>
       </BrowserRouter>
       
      </div>
    )
    
  }

}

export default App;
