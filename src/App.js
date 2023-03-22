import React from "react"
//css
import "./App.css"
//import template
import Home from "./components/Template/Home/Home";
import Grade from "./components/Template/Grade/Grade";

class App extends React.Component{

  render(){
    return(
      <div>
       {/* <Home/>*/ }
       <Grade/>
      </div>
    )
    
  }

}

export default App;
