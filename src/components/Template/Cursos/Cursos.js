import React from "react";
//import components
import Head from "../../Structure/Head/Head";
import Footer from "../../Structure/Footer/Footer";
import Cards from "../../Structure/Cards/Cards";

import math from '../../../images/math.jpg'
import physics from '../../../images/physics.jpg'
import code from '../../../images/code.jpg'
import robot from '../../../images/robot.jpg'

import "./Cursos.css"

class Grade extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          imge: [math,physics,code,robot],
          titlee: ["Matematicas","Fisica","Programación","Robotica"],
          descripp: ["En este curso encontraras recursos de aritmetica, calculo, derivadas, integrales, ecuaciones diferenciales, series de fourier, entre otros.",
          "En este curso encontraras recursos de fisica mecanica, fluidos, electromagnetismo y ondas.",
          "En este curso encontraras recursos de programación enfocados a maching learning, desarrollo web, microcontroladores, entre otros.",
          "En este curso encontraras recursos de robotica educativa y sistemas de control"]
        };
      }

    render(){

        return(
            <div>
                <div className="head">
                    <Head/>
                </div>

                <div class="section">
                    <Cards img={this.state.imge} title={this.state.titlee} descrip={this.state.descripp}/>
                </div>

                <div className="footer">
                    <Footer/>
                </div>
                
            </div>
        )
    }


}

export default Grade;