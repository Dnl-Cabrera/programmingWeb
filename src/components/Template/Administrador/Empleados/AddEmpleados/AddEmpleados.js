import React from "react";
import { useNavigate } from 'react-router-dom';
//React components

//Own components
import SideBarAdministrator from "../../../../Structure/SideBarAdministrator/SideBarAdministrator"


//React Bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


//Css
import "./AddEmpleados.css"

class AddEmpleados extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            name: '',
            lastname: '',
            id: '',
            email: '',
            phone: '',
            password: '',
            passwordConfirm: '-'
        };
    }

    handleChange = (event) => {
        if (event.target.placeholder === "Username") {
            this.setState({
                username: event.target.value
            })
        }
        else if (event.target.placeholder === "Name") {
            this.setState({
                name: event.target.value
            })
        }
        else if (event.target.placeholder === "Lastname") {
            this.setState({
                lastname: event.target.value
            })
        }
        else if (event.target.placeholder === "ID") {
            this.setState({
                id: event.target.value
            })
        }
        else if (event.target.placeholder === "email@address.com") {
            this.setState({
                email: event.target.value
            })
        }
        else if (event.target.placeholder === "Phone number") {
            this.setState({
                phone: event.target.value
            })
        }
        else if (event.target.placeholder === "Password") {
            this.setState({
                password: event.target.value
            })
            console.log(event.target.value)
        }
        else if (event.target.placeholder === "Confirm password") {
            this.setState({
                passwordConfirm: event.target.value
            })
            console.log(event.target.value)
        }
    }

    requestData = () => {

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id_users": {
                        "username": this.state.username,
                        "password": this.state.password
                    },
                    "cedula": this.state.id,
                    "nombre": this.state.name,
                    "apellido": this.state.lastname,
                    "email": this.state.email,
                    "telefono": this.state.phone,
                    "estado_usuario": 'Activo'
                })
            };

            /*Estamos consumiendo la API mediante fetch, recibe la url y el requestOptions */
            fetch('https://drap.pythonanywhere.com/usuario/createuser', requestOptions)
                .then(response => {
                    /*With this if, our ask if response is ok, if is ok return the format .json */
                    if (response.ok) {
                        alert("Usuario registrado");
                        response.json(); /*Indicamos que es formato json la respuesta que se espera */
                    }
                    else{
                        alert("Error en el registro")
                    }
                    /*this is a promise which our informated that the API return error
                    Is necesary for catch.
                    Se debe buscar mas informacion para clarificar el funcionamiento de la promesa. */
                    return Promise.reject(response);
                })
                .catch(err => { /*When the fetch es bad, the response is false in the "token" */
                    //alert("error en el ingreso")
                    //console.log(this.state.token);

                })
                .then(responseError => { //Esta es la respuesta que puede surgir si la consulta es un error.
                    console.log(responseError);
                })
        
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.password === this.state.passwordConfirm) {
            console.log("funcion")
            this.requestData();
            console.log(this.state)
        }
        else {
            alert("Contraseñas diferentes");
        }
    }

    render() {
        return (
            <div className="containerAddEmpleados">
                <SideBarAdministrator>
                    <Container fluid className="containerChildAdd">
                        <h2>Ingrese los datos del usuario a registrar</h2>
                        <Form onSubmit={this.handleSubmitForm} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="Username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="Lastname" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Cedula</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="ID" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="email@address.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="Phone number" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Confirmar contraseña</Form.Label>
                                <Form.Control onChange={this.handleChange} className="mb-4" type="password" placeholder="Confirm password" />
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="formPlaintextPassword">
                                <Form.Control type="submit" value="Enviar" />
                            </Form.Group>
                        </Form>
                    </Container>
                </SideBarAdministrator>
            </div>
        )
    }


}

export default AddEmpleados;