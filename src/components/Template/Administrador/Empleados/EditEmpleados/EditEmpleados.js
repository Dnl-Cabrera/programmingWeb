import React from "react";
//React components

//Bootstra React
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//Own components
import SideBarAdministrator from "../../../../Structure/SideBarAdministrator/SideBarAdministrator"

import './EditEmpleados.css'

class EditEmpleados extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            datos: [],
            ID_key: '',
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
        if (event.target.placeholder === "ID number") {
            this.setState({
                ID_key: event.target.value
            })
        }

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

    ApiEditEmployee = () => {

        const requestOptions = {
            method: 'PUT',
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


        let url = 'http://drap.pythonanywhere.com/usuario/updateuser/' + this.state.ID_key

        /*Estamos consumiendo la API mediante fetch, recibe la url y el requestOptions */
        fetch(url, requestOptions)
            .then(response => {
                /*With this if, our ask if response is ok, if is ok return the format .json */
                if (response.ok) {
                    alert("Usuario actualizado");
                    response.json(); /*Indicamos que es formato json la respuesta que se espera */
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
            this.ApiEditEmployee();
            console.log(this.state)
        }
        else {
            alert("Contraseñas diferentes");
        }
    }

    ApiGetOneEmployee = () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        let url = 'http://drap.pythonanywhere.com/usuario/onegetuser/' + this.state.ID_key

        fetch(url, requestOptions)
            .then(response => {
                //console.log(response)
                alert("Datos Consultados");
                return response.json();
            })
            .then(result => {
                console.log(result[0].id_users);
                this.setState({
                    datos: result,
                    //Esto es para colocar los datos en las variables de estado
                    ID_key: result[0].id_users.pk,
                    username: result[0].id_users.username,
                    name: result[0].nombre,
                    lastname: result[0].apellido,
                    id: result[0].cedula,
                    email: result[0].email,
                    phone: result[0].telefono,
                    password: result[0].id_users.password,
                    passwordConfirm: result[0].id_users.password
                });

            })
            .catch(err => {
                alert("Error en la consulta")
                return "error"
            })
            .then(responseError => {
                return responseError
            });
    }

    render() {
        return (
            <div className="MenuAdministrator">
                <SideBarAdministrator>
                    <Container fluid className="containerEditEmpleados">
                        <h2>Datos Usuario </h2>
                        <div className="form mb-3">
                            <input type="email" onChange={this.handleChange} className="form-control" placeholder="ID number" value={this.state.ID_key}/>
                            <button type="button" onClick={this.ApiGetOneEmployee} className="btn btn-light m-2">Consultar</button>
                        </div>
                        {this.state.datos.map(item => (
                            <Container fluid >
                                <h2>Ingrese los datos del usuario a registrar</h2>
                                <Form onSubmit={this.handleSubmitForm} >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>ID</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" placeholder="PrimaryKey" value={this.state.ID_key} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" placeholder="Username" value={this.state.username} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" placeholder="Name" value={this.state.name} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" placeholder="Lastname" value={this.state.lastname} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Cedula</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" placeholder="ID" value={this.state.id} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" placeholder="email@address.com" value={this.state.email} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Telefono</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="text" placeholder="Phone number" value={this.state.phone} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control onChange={this.handleChange} type="password" placeholder="Password" value={this.state.password} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Confirmar contraseña</Form.Label>
                                        <Form.Control onChange={this.handleChange} className="mb-4" type="password" placeholder="Confirm password" value={this.state.password} />
                                    </Form.Group>
                                    <Form.Group className="mb-3 " controlId="formPlaintextPassword">
                                        <Form.Control type="submit" value="Enviar" />
                                    </Form.Group>
                                </Form>
                            </Container>
                        ))}

                    </Container>
                </SideBarAdministrator>
            </div>
        )
    }


}

export default EditEmpleados;