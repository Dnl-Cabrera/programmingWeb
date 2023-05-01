import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {BiBold,BiItalic,BiUnderline} from 'react-icons/bi' //Agregamos libreria para importar icons

import "./Tweet.css"

import imagen from '../../../images/0.jpg';

class Tweet extends React.Component{

    constructor(){
        super();
        this.state = {
            message:'',
        };
    }

    formato = (etiqueta) =>{
        const selection = window.getSelection();
       
        const selectedText = selection.toString();
        //console.log(selectedText)
        //console.log(selectedText.length)
        //Preguntamos si tiene caracteres la selección.
        if(selectedText.length === 0){
            return;
        }
        else{
            const range = selection.getRangeAt(0);
            //commonAncestorContainer Permite acceder a todos los padres nodos que tenga el rango seleccionado.
            //.parentNode permite acceder al primer padre del objeto seleccionado.
            // si llegara a colocar mas .parentNode accederia al padre que le sigue, y asi sucesivamente.
            const padreNodo = range.commonAncestorContainer.parentNode;
            //console.log(padreNodo.nodeName)

            if(padreNodo.nodeName === etiqueta){
                //replaceWith permite reemplazar una etiqueta , ejemplo: <div><strong></strong></div> me permite cambiar strong por el que quiera.
                //... es desglozar un vector es decir tenemos let array=[1,2,3] los tres puntosdesglozarian el vector por ende pasaria de un vector a
                // numeros por separado 1 2 3
                //extractContents() lo que hace es que toma el valor de una etiqueta y lo guarda en DocumentFragment, el cual no hace parte del DOM,
                //pero queda almacenado en documentFragment y lo elimina del DOM.
                //childNodes, toma todos los nodos (etiquetas) que estan en el rango, que se extragenron, sin embargo, por el extractContents se eliminan del DOM.
                //Apesar que lo coloco en el console.log, se ejecuta la acción en el DOM.
                console.log(padreNodo.replaceWith(...range.extractContents().childNodes));
            }
            else{
                const tag = document.createElement(etiqueta);
                //document.createTextNode obtiene eltexto de un nodo sin las etiquetas.
                //bold.appendChild crea un hijo dentro de la etiqueta strong, en este caso coloca solo el texto de selectedText
                tag.appendChild(document.createTextNode(selectedText));
                range.deleteContents();
                range.insertNode(tag);
            }
            selection.removeAllRanges();
        }
    }

    negrita = (e) =>{
        e.preventDefault();
        this.formato("STRONG");
        
    }

    cursiva = (e) =>{
        e.preventDefault();
        this.formato("I");
    }

    subrayado = (e) =>{
        e.preventDefault();
        this.formato("U");
    }

    render(){
        return(
                <div className="tweet">
                    
                    <Container className="mb-3">
                        <Row className="p-2">
                            <Col className="boxPost rounded" xs={12} lg={12}>
                                <img src={imagen} className="imageProfile" alt=""/>
                                <div className="contenedor-textArea rounded p-2">
                                    <div className="box-textArea">
                                        <div data-text="Ingrese su post" className="divEditable p-2 rounded" contenteditable="true">
                                            
                                        </div>
                                    </div>
                                    <div className="box-textArea-feature">
                                        <button onClick={this.negrita} className="botones">
                                            <BiBold className="botones-icon" />
                                        </button>
                                        <button className="botones">
                                            <BiItalic onClick={this.cursiva} className="botones-icon"/>
                                        </button>
                                        <button className="botones">
                                            <BiUnderline onClick={this.subrayado} className="botones-icon"/>
                                        </button>
                                        <Button className="publicar" variant="outlined">Publicar</Button>
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                        <Row>
                            
                        </Row>
                    </Container>
                    
                </div>
            
        )
    }

}

export default Tweet;