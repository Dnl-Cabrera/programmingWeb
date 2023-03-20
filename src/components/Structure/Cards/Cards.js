import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

import './Cards.css'
//images
import math from '../../../images/math.jpg'
import physics from '../../../images/physics.jpg'
import code from '../../../images/code.jpg'
import robot from '../../../images/robot.jpg'


class Cards extends React.Component{


    constructor(props) {
        super(props);
    
        this.state = {
          img: [math,physics,code,robot],
          title: ["Matematicas","Fisica","Programación","Robotica"],
          descrip: ["En este curso encontraras recursos de aritmetica, calculo, derivadas, integrales, ecuaciones diferenciales, series de fourier, entre otros.",
          "En este curso encontraras recursos de fisica mecanica, fluidos, electromagnetismo y ondas.",
          "En este curso encontraras recursos de programación enfocados a maching learning, desarrollo web, microcontroladores, entre otros.",
          "En este curso encontraras recursos de robotica educativa y sistemas de control"]
        };
      }

    render(){

        return(
            <div>
                
                <Container>
                        <Row className="filas justify-content-center">
                            {this.state.img.map((item,index)=>(
                                <Col lg={3} sm={12} className="mt-2">
                                    <Card className="card-content" style={{ width: '100%',height:'100%'}}>{/*card-content es una clase propia*/}
                                        <Card.Img variant="top" src={item} className="cardss"/>
                                        <Card.Body>
                                            <Card.Title>Curso {this.state.title[index]}</Card.Title>
                                            <Card.Text>
                                            {this.state.descrip[index]}
                                            </Card.Text>
                                            <Button variant="primary">Ir al curso</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>     
                            )
                            )}
                        </Row>
                </Container>
                
                
            </div>
        )
    }

}

export default Cards;