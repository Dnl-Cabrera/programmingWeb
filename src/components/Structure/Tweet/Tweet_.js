import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import {BiBold,BiItalic,BiUnderline} from 'react-icons/bi' //Agregamos libreria para importar icons

import "./Tweet.css"

import imagen from '../../../images/0.jpg';

class Tweet extends React.Component{

    constructor(){
        super();
        this.state = {
            texto:'',
        };
    }
    
    /*Se crea una función campoText, que detecta un evento en el DOM*/
    campoText = (e) => {
        /*Con e podemos acceder a todas las caracteristicas de la etiqueta a la que estamos modificando.*/
        console.log(e.target);//En esta linea accedemos al dom de la etiqueta que se esta modificando. Esta etiqueta esta asociada con el evento de la etiqueta que llama la función
        e.target.style='height:auto'; //Accedemos al style del DOM que esta siendo modificado. con auto, ajustamos el campo de texto a la cantidad de texto que tenga.
        e.target.style='height:'+e.target.scrollHeight+'px;'; //modificamos el height segun el tamaño del scroll.
        console.log(e.target.value.length);

        const seleccion=window.getSelection().toString();
        console.log(seleccion);
    }
    /*Función para agregar el valor*/
    handleTextoChange = (e) => {
        /*Estamos actualizando el estado, al valor del campo de texto */
        this.setState({
            texto:e.target.value,
        });
        //console.log(this.state.texto);
    }

    negrita = (e) => {
        //preventDefault es para que no se recargue la pagina con el boton.
        e.preventDefault();
        // Obtener la sección de texto que selecciona el cursos
        const seleccion=window.getSelection().toString();

        const textarea=document.getElementById("a");
        const startIndex = textarea.selectionStart;
        const endIndex = textarea.selectionEnd;
        const selectedText = textarea.value.slice(startIndex, endIndex);

        const newText = textarea.value.slice(0, startIndex) + '<b>' + selectedText + '</b>' + textarea.value.slice(endIndex);
         
        this.setState({
            texto:newText,
        })

        console.log(newText);

        /*
        if(seleccion.length>0){
            
            const inicio=this.state.texto.indexOf(seleccion);
            // Obtener el índice final de la selección
            const fin = inicio + seleccion.length;
            // Aplicar el estilo de negrita a la selección
            const textoConNegrita =
            this.state.texto.substring(0, inicio) +
            "<b>" +
            seleccion +
            "</b>" +
            this.state.texto.substring(fin);
            this.setState({
                texto:textoConNegrita,
            })
            console.log(this.state.texto)
            
           /*
            const textarea = document.getElementById('myTextarea');
            const startIndex = textarea.selectionStart;
            const endIndex = textarea.selectionEnd;
            const selectedText = textarea.value.slice(startIndex, endIndex);
            const newText = textarea.value.slice(0, startIndex) + '<b>' + selectedText + '</b>' + textarea.value.slice(endIndex);
            this.setState({
                texto:newText,
            })
            console.log(this.state.texto) 
            */
        
        
    }

    render(){
        return(
            <div>
                <div className="tweet">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Container>
                                <Row>
                                    <Col>
                                        <img src={imagen} alt="asdasd"/>
                                    </Col>
                                    <Col>
                                        <div className="contenedor-textArea">
                                            <div className="box-textArea">
                                            <Form.Group controlId="myTextarea">
                                                <FloatingLabel
                                                    controlId="floatingInput"
                                                    label="Email address"
                                                    className="mb-3"
                                                >
                                                    {/*onInput es un evento que detecta cualquier cambio en un input.*/}
                                                    <Form.Control className="textArea" id="a" value={this.state.texto} onChange={this.handleTextoChange}  as="textarea" onInput={this.campoText} rows="1" cols="70" placeholder="Leave a comment here"/> 
                                                    
                                                </FloatingLabel>
                                                </Form.Group>
                                            </div>
                                            <div className="box-textArea-feature">
                                                <button onClick={this.negrita} className="botones">
                                                    <BiBold className="botones-icon" />
                                                </button>
                                                <button className="botones">
                                                    <BiItalic className="botones-icon"/>
                                                </button>
                                                <button className="botones">
                                                    <BiUnderline className="botones-icon"/>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                    
                                </Row>
                                <Row>
                                    
                                </Row>
                            </Container>
                            
                        </Form.Group>
                    </Form>
                    
                </div>
            </div>
        )
    }

}

export default Tweet;