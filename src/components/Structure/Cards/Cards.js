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

    render(){

        return(
            <div>
                
                <Container>
                        <Row className="filas justify-content-center">
                            {this.props.img.map((item,index)=>(
                                <Col lg={3} sm={12} className="mt-2">
                                    <Card className="card-content" style={{ width: '100%',height:'100%'}}>{/*card-content es una clase propia*/}
                                        <Card.Img variant="top" src={item} className="cardss"/>
                                        <Card.Body>
                                            {console.log("Hola")}
                                            <Card.Title>Curso {this.props.title[index]}</Card.Title>
                                            <Card.Text>
                                            {this.props.descrip[index]}
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