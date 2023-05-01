import React from "react";
import {BiBold,BiItalic,BiUnderline} from 'react-icons/bi' //Agregamos libreria para importar icons

class Tweet extends React.Component {

    constructor(){
        super();
        this.state = {
            content:'',
        };
    }

    handleTextoChange = (e) => {
        
        this.setState({
            content:e.target.innerText,
        });
        
    }

    negrita = () =>{
        const selection = window.getSelection();
        const selectedText = selection.toString();
        //getRangeAt(0) es una propiedad que me permite obtener el rango seleccionado como objeto div.
        const range = selection.getRangeAt(0); //range.toString() puedo ver el campo seleccionado.
        //creo un elemento strong
        const bold = document.createElement("strong");
        //document.createTextNode obtiene eltexto de un nodo sin las etiquetas.
        //bold.appendChild crea un hijo dentro de la etiqueta strong, en este caso coloca solo el texto de selectedText
        bold.appendChild(document.createTextNode(selectedText));
        //deleteContents elimina el rango seleccionado, en este caso la palabra que se selecciono con el cursor
        range.deleteContents();
        console.log(bold.innerHTML);
        //range como es la seleccion del texto, que se almaceno en range, pero se elimino, al momento de eliminarlo queda el inicio de ese nodo
        //es decir la posición donde inicia el texto seleccionado, por ende, cuando llamamos a range, e insertamos un nodo en el, se inserta
        //desde el inicio del range, por ende aca se esta iniciando la nueva etiqueta bold, en este caso strong.
        range.insertNode(bold);
    }
  
    formato = () =>{
        const selection = window.getSelection();
        const selectedText = selection.toString();
        console.log(selectedText.length)
        if(selectedText.length == 0){
            return;
        }
        else{
            const range = selection.getRangeAt(0);
            //commonAncestorContainer Permite acceder a todos los padres nodos que tenga el rango seleccionado.
            //.parentNode permite acceder al primer padre del objeto seleccionado.
            // si llegara a colocar mas .parentNode accederia al padre que le sigue, y asi sucesivamente.
            const padreNodo = range.commonAncestorContainer.parentNode;

            if(padreNodo.nodeName=="STRONG"){
                //replaceWith permite reemplazar una etiqueta , ejemplo: <div><strong></strong></div> me permite cambiar strong por el que quiera.
                //... es desglozar un vector es decir tenemos let array=[1,2,3] los tres puntosdesglozarian el vector por ende pasaria de un vector a
                // numeros por separado 1 2 3
                //extractContents() lo que hace es que toma el valor de una etiqueta y lo guarda en DocumentFragment, el cual no hace parte del DOM,
                //pero queda almacenado en documentFragment y lo elimina del DOM.
                //childNodes, toma todos los nodos (etiquetas) que estan en el rango, que se extragenron, sin embargo, por el extractContents se eliminan del DOM.
                
                console.log(padreNodo.replaceWith(...range.extractContents().childNodes));
            }
            else{
                const bold = document.createElement("strong");
                //document.createTextNode obtiene eltexto de un nodo sin las etiquetas.
                //bold.appendChild crea un hijo dentro de la etiqueta strong, en este caso coloca solo el texto de selectedText
                bold.appendChild(document.createTextNode(selectedText));
                range.deleteContents();
                range.insertNode(bold);
            }
            selection.removeAllRanges();
        }
    }

    render() {
        return (
        <div>
            <div id="myDiv" contenteditable="true" Style="background:white" onInput={this.handleTextoChange}>
                Editable
            </div>
            <button onClick={this.negrita} className="botones">
                <BiBold className="botones-icon" />
            </button>
            <button className="botones" onClick={this.formato}>
                <BiItalic className="botones-icon"/>
            </button>
        </div>
        );
    }
}

export default Tweet;



/*import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {BiBold,BiItalic,BiUnderline} from 'react-icons/bi' //Agregamos libreria para importar icons

import "./Tweet.css"

import imagen from '../../../images/0.jpg';

class Tweet extends React.Component{

    constructor(){
        super();
        this.state = {
            content:'',
        };
        this.editable = React.createRef();
    }
    
    makeBold = (e) => {
        e.preventDefault();
        const editable = this.editable.current;
        const selection = window.getSelection();
        if (selection.rangeCount === 0) return;
        const range = selection.getRangeAt(0);
        const selectedText = range.toString();
        if (selectedText === "") return;
        const newContent = this.formatContent(editable.innerHTML, selection, selectedText, "<strong>", "</strong>");
        this.setState({
            content:newContent,
        });
        selection.removeAllRanges();
      }

    formatContent = (content, selection,selectedText, prefix, suffix) => {
        const range = selection.getRangeAt(0);
        const startNode = range.startContainer;
        const endNode = range.endContainer;
        let startOffset = range.startOffset;
        let endOffset = range.endOffset;
        if (startNode === endNode) {
          const newContent = `${content.substring(0, startOffset)}${prefix}${selectedText}${suffix}${content.substring(endOffset)}`;
          return newContent;
        } else {
          const nodes = this.getSelectedNodes(startNode, endNode);
          const newNodes = nodes.map((node, index) => {
            const start = index === 0 ? startOffset : 0;
            const end = index === nodes.length - 1 ? endOffset : node.textContent.length;
            const selectedText = node.textContent.substring(start, end);
            const newNode = document.createElement("span");
            newNode.innerHTML = `${prefix}${selectedText}${suffix}`;
            return newNode;
          });
          range.deleteContents();
          newNodes.forEach((node) => {
            range.insertNode(node);
          });
          return content;
        }
      }

    getSelectedNodes = (startNode, endNode) => {
        const nodes = [];
        let node = startNode;
        while (node && node !== endNode.nextSibling) {
          nodes.push(node);
          node = node.nextSibling;
        }
        return nodes;
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
                                                <div data-text="Escribe tu post" className="divEditable form-control" ref={this.editable} contentEditable={true} dangerouslySetInnerHTML={{ __html: this.content }}></div>
                                            </div>
                                            <div className="box-textArea-feature">
                                                <button onClick={this.makeBold} className="botones">
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
        );
    }

}

export default Tweet;
*/