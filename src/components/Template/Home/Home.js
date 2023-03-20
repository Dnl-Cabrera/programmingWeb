import React from "react";
//React components
import Head from "../../Structure/Head/Head";
import Section from "../../Structure/Section/Section";
import Cards from "../../Structure/Cards/Cards";
import Footer from "../../Structure/Footer/Footer";

class Home extends React.Component{

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

export default Home;