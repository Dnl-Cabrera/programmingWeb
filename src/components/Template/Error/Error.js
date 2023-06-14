import React from "react";
//React components
import Head from "../../Structure/Head/Head";
import Section from "../../Structure/Section/Section";
import Cards from "../../Structure/Cards/Cards";
import Footer from "../../Structure/Footer/Footer";
//import images


class Error extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }

    render(){
        return(
            <div className="HomePage">
                <div class="background">
                <div class="nav-padre">
                    <Head/>
                    <h1>{localStorage.getItem('Error')}</h1>
                    <Footer/>
                    
                </div>
                </div>
            </div>
        )
    }
}

export default Error;