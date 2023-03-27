import React from "react";
//import components
import Head from "../../Structure/Head/Head";
import Footer from "../../Structure/Footer/Footer";
//import Cards from "../../Structure/Cards/Cards";
import Tweet from "../../Structure/Tweet/Tweet";
//css
import "./Grade.css"
//import images
//import math from '../../../images/math.jpg'
//import physics from '../../../images/physics.jpg'
import inform from '../../../images/code.jpg'
import robot from '../../../images/robot.jpg'
import binary from '../../../images/binary.jpg'

class Grade extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            imge: [binary,inform,inform,robot],
            titlee: ["1003","804","805","Centro Interes 6"],
            descripp: ["Contenido de programación",
            "Contenido de informatica",
            "Contenido de informatica",
            "Contenido de habilidades digitales para la vida"]
        };
    }

    render(){

        return(
            <div>
                <div className="head">
                    <Head/>
                </div>

                <div class="section">
                    {/*<Cards title={this.state.titlee} img={this.state.imge} descrip={this.state.descripp}/>*/}
                    <Tweet/>
                </div>

                <div className="footer">
                    <Footer/>
                </div>
                
            </div>
        )
    }


}

export default Grade;