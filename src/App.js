import React from "react"
import Head from "./components/Structure/Head/Head";
import Footer from "./components/Structure/Footer/Footer";
import "./App.css"

class App extends React.Component{

  render(){
    return(
      <div>
        <div class="nav-padre">
          <Head></Head>
        </div>
        <div class="footer-padre">
          <Footer></Footer>
        </div>
        
      </div>
    )
    
  }

}

export default App;
