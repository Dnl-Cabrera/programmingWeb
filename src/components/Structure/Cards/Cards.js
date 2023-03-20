import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import imagen12 from '../../../images/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css';

import './Cards.css'



class Cards extends React.Component{

    render(){
        return(
            <div>
                
                <Container>
                        <Row className="filas justify-content-center">
                            <Col lg={3} sm={12} className="mt-2">
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={imagen12} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} sm={12} className="mt-2">
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={imagen12} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} sm={12} className="mt-2">
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={imagen12} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} sm={12} className="mt-2">
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={imagen12} />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        </Row>
                </Container>
                
                
            </div>
        )
    }

}

export default Cards;