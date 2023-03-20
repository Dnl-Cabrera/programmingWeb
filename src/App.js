import React from "react"
import Head from "./components/Structure/Head/Head";
import Footer from "./components/Structure/Footer/Footer";
import Section from "./components/Structure/Section/Section";
import Cards from "./components/Structure/Cards/Cards";
import "./App.css"

class App extends React.Component{

  render(){
    return(
      <div>
        <div class="background">
          <div class="nav-padre">
            <Head/>
            <Section/>
            <Cards/>
            <div class="footer-padre">
              <Footer></Footer>
            </div>
            
          </div>
          
          
          
        </div>
      </div>
    )
    
  }

}

export default App;
