import React from "react";
import {FaFacebook,FaLinkedin,FaGithub} from 'react-icons/fa' //Agregamos libreria para importar icons
import {TfiEmail} from 'react-icons/tfi' //Tener presente que cada icon tiene su propia ubicación.
import {SlPhone} from 'react-icons/sl'
import "./Footer.css"


class Footer extends React.Component {

    render(){
        return(
            <div>
                <div className="wrapper">
                    <div className="item1">
                        <ul>
                            <li Style="padding-bottom:1.5%"><strong Style="font-size:1.3em">Creado por:</strong></li>
                            <li>Carlos Eduardo Cabrera Ardila</li>
                            <li Style="font-style: italic;">Licenciado en Electronica de la Universidad Pedagogica Nacional</li>
                            <li Style="font-style: italic; ">Master en Ingenieria - Automatización Industrial de la Universidad Nacional de Colombia Sede Bogotá</li>
                        </ul>
                    </div>
                    <div className="item2">
                        <ul>
                            <li Style="padding-bottom:4%"><strong Style="font-size:1.3em">Redes:</strong></li>
                            <li>
                                <a href=" "><FaFacebook className="face"/></a>
                                <a href=" "><FaLinkedin className="linke"/></a>
                                <a href=" "><FaGithub className="Github"/></a>
                            </li>
                        </ul>
                    </div>
                    <div className="item3">
                        <ul>
                            <li className="i1" Style="padding-bottom:1.5%"><strong Style="font-size:1.3em">Contacto:</strong></li>
                            <li><div><TfiEmail className="email"/><p Style="margin-top:-1%;">ccabreraa@unal.edu.co</p></div></li>
                            <li><div><SlPhone className="phone"/><p Style="margin-top:-1%;">304 646 XXXX</p></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;