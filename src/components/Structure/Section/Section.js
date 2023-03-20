import React from "react";
import "./Section.css"
import imagen1 from "../../../images/vecteezy_img1.png"
class Section extends React.Component {

    render(){
        return(
            <div>
                <div class="section">
                    <div class="wrapper-section">
                        <div class="fila1">
                            <h1>Contenido educativo basado en los ODS en areas de programación y robotica.</h1>
                            <p>En esta pagina podras encontrar contenido relacionado con programación, robotica, maching learning, matematicas y fisica.</p>
                        </div>
                        <div class="fila2">
                            <img src={imagen1} alt="vecteezy_img1"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Section;