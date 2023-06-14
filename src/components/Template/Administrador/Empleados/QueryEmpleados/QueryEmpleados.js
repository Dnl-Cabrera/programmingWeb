import React from "react";
//React components

//Own components
import SideBarAdministrator from "../../../../Structure/SideBarAdministrator/SideBarAdministrator"

//Bootstrap React
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useNavigate} from "react-router-dom"
//

//css
import "./QueryEmpleados.css"

class QueryEmpleados extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            datos:[],
            prueba:false
        };
    }

    navigateRef = React.createRef();

    ApiGetEmployee = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token '+localStorage.getItem('token')
            }
        }

        fetch('http://localhost:8000/usuario/getusers', requestOptions)
            .then(response => {
                //console.log(response)
                if(response.ok){
                    alert("Datos Consultados");
                }
                else{
                    alert("Error en la consulta")
                    console.log('response',response)
                    //console.log(response.status,response.statusText)
                    const message = 'Error '+response.status+' ('+response.statusText+')'
                    window.localStorage.setItem('Error',message)
                    this.navigateRef("/Error")
                }
                
                return response.json();
            })
            .then(result => {
                console.log("Result",result);
                this.setState({
                    datos: result
                })

            })
           /* .catch(err => { //Se quito el catch debido a que no permite ejecutar funciones en el.
                
                //this.miFuncionRefNavigate();
                alert("Error en la consulta");
                
                console.log('err',err);

                //navigate("/Error");
                return;
            })*/
        
    }


    render() {

        //Dentro del render todo funciona como un componente de clase.

        //Esta función permite enviar desde un componente funcional padre a un
        //componente de clase hijo la funcion useNavigate, para poder redireccionar a otra
        //pagina implementando las direcciones de ROUTER.
        
        //Esta funcion la ejecuta el boton de consulta.
        const consultarEmpleado = () =>{
            const { navigateFunction } = this.props; /*Se crea un prop a partir de un
            componente de clase, este componente recibe la función de navigate de useNavigate */
            this.navigateRef = navigateFunction; /*Se guarda en la navigateRef, que es una
             React.createRef(), la funcion navigateFunction  */
             //Se ejecuta ApiGetEmployee para que ejecute el fetch de la consulta y pueda traer los datos
            this.ApiGetEmployee();
        }
        
        return (
            <div className="MenuAdministrator">
                <SideBarAdministrator>
                    <div className="containerQueryEmployee container">
                        <h2>Consultar todos los empleados</h2>
                        <button type="button" onClick={consultarEmpleado} className="btn btn-light m-2">Consultar</button>

                        <Container>
                        <Row>
                            {this.state.datos.map(item => (
                                <Col lg sm={12}>
                                    {console.log(item)}
                                    <Card style={{ width: '18rem' }} className="mb-1">
                                        <Card.Header>ID User: {item.id_users.pk}</Card.Header>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>username: {item.id_users.username}</ListGroup.Item>
                                            <ListGroup.Item>Cedula: {item.cedula}</ListGroup.Item>
                                            <ListGroup.Item>Apellido: {item.apellido}</ListGroup.Item>
                                            <ListGroup.Item>Nombre: {item.nombre}</ListGroup.Item>
                                            <ListGroup.Item>Email: {item.email}</ListGroup.Item>
                                            <ListGroup.Item>Estado: {item.estado_usuario}</ListGroup.Item>
                                            <ListGroup.Item>Fecha creacion: {item.fecha_creacion}</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        </Container>

                    </div>
                </SideBarAdministrator>
            </div>
        )
    }


}


export default QueryEmpleados;