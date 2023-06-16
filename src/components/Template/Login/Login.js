import React, { useState } from "react";
//Import Components
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

import './Login.css'

const Login = ({ dataSend }) => {

    let navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (event) => {
        //console.log(this.state.password)
        if (event.target.type === "text") {
            setUsername(event.target.value);
        }
        else if (event.target.type === "password") {
            setPassword(event.target.value);
        }
    }

    const requestData = () => {
        /*Estamos configurando el envio de datos y la estructura en como se envian los datos. */
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "email": "",
                "password": password
            })
        };

        /*Estamos consumiendo la API mediante fetch, recibe la url y el requestOptions */
        fetch('https://drap.pythonanywhere.com/dj-rest-auth/login/', requestOptions)
            .then(response => {
                /*With this if, our ask if response is ok, if is ok return the format .json */
                if (response.ok) {
                    alert("Ingreso");
                    return response.json(); /*Indicamos que es formato json la respuesta que se espera */
                }
                /*this is a promise which our informated that the API return error
                Is necesary for catch.
                Se debe buscar mas informacion para clarificar el funcionamiento de la promesa. */
                return Promise.reject(response);
            })
            .then(result => {
                /*
                this.setState({ /*Indicamos donde queremos guardar la respuesta. En este caso la respues que se recibe 
        esta en result. However, result is a object, in this object has a parameter call "key", that value is save in the "token" state.
                    token: result.key
                }), */
                dataSend(result.key, navigate);


                //console.log(this.state.token)
            })
            .catch(err => { /*When the fetch es bad, the response is false in the "token" */
                alert("error en el ingreso")
                //console.log(this.state.token);

            })
            .then(responseError => { //Esta es la respuesta que puede surgir si la consulta es un error.
                console.log(responseError);
            })
    }



    const handleSubmitLogin = (e) => {
        e.preventDefault();
        requestData();
    }

    return (
        <div className="bg_login">

            <Row className="content_box">

                <Col lg={12}>
                    {/*Esta etiqueta esta en Head, por lo que la reutilizamos, no se necesita volver a agregar el css*/}
                    <Link to="/">
                        <a href class="name">
                            Autonomous <span className="saltoLinea"></span>Education Web
                        </a>
                    </Link>
                    <div className="loginPadre">
                        <div className="loginContainer rounded shadow-lg p-3 mb-5 bg-body-tertiary">
                            <h1>Welcome back</h1>
                            <Form onSubmit={handleSubmitLogin}>
                                <Form.Label>Inserta tus credenciales</Form.Label>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address or username</Form.Label>
                                    <Form.Control onChange={handleChange} type="text" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={handleChange} type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Check className="mb-3" type="checkbox" label="Recordar datos" />
                                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Control type="submit" value="Enviar" />
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </Col>

            </Row>
        </div>
    )



}

export default Login;


/* 
import React from "react";
//Import Components
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';

import './Login.css'

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            success: false
        };

        /*Esto es para que se actualicen los cambios de la función handleChange
        mirar: https://es.legacy.reactjs.org/docs/forms.html*/
/*handleChange son funciones que se crearon, sin embargo se debe buscar por se agreganen el constructor para que se
actualicen las variables de estado. this.state 
this.handleChange = this.handleChange.bind(this);
this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
}

handleChange(event) {
//console.log(this.state.password)
if (event.target.type === "text") {
    this.setState({ username: event.target.value });
}
else if (event.target.type === "password") {
    this.setState({ password: event.target.value });
}
}

requestData(){
/*Estamos configurando el envio de datos y la estructura en como se envian los datos. 
const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "username": this.state.username,
        "email": "",
        "password": this.state.password
    })
};

/*Estamos consumiendo la API mediante fetch, recibe la url y el requestOptions 
fetch('http://localhost:8000/dj-rest-auth/login/', requestOptions)
    .then(response => {
        /*With this if, our ask if response is ok, if is ok return the format .json 
        if (response.ok) {
            alert("Ingreso");
            return response.json(); /*Indicamos que es formato json la respuesta que se espera 
        }
        /*this is a promise which our informated that the API return error
        Is necesary for catch.
        Se debe buscar mas informacion para clarificar el funcionamiento de la promesa. 
        return Promise.reject(response);
    })
    .then(result =>
        /*
        this.setState({ /*Indicamos donde queremos guardar la respuesta. En este caso la respues que se recibe 
esta en result. However, result is a object, in this object has a parameter call "key", that value is save in the "token" state.
            token: result.key
        }), 
        this.props.dataSend(result.key),

        //console.log(this.state.token)
    )
    .catch(err => { /*When the fetch es bad, the response is false in the "token" 
        alert("error en el ingreso")
        //console.log(this.state.token);

    })
    .then(responseError => { //Esta es la respuesta que puede surgir si la consulta es un error.
        console.log(responseError); 
    })
}



handleSubmitLogin(e) {
e.preventDefault();
this.requestData();
}

render() {
return (
    <div className="bg_login">

        <Row className="content_box">

            <Col lg={12}>
                {/*Esta etiqueta esta en Head, por lo que la reutilizamos, no se necesita volver a agregar el css}
                <Link to="/">
                    <a href class="name">
                        Autonomous <span className="saltoLinea"></span>Education Web
                    </a>
                </Link>
                <div className="loginPadre">
                    <div className="loginContainer rounded shadow-lg p-3 mb-5 bg-body-tertiary">
                        <h1>Welcome back</h1>
                        <Form onSubmit={this.handleSubmitLogin}>
                            <Form.Label>Inserta tus credenciales</Form.Label>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address or username</Form.Label>
                                <Form.Control onChange={this.handleChange} type="text" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={this.handleChange} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Check className="mb-3" type="checkbox" label="Recordar datos" />
                            <Form.Group className="mb-3" controlId="formPlaintextPassword">
                                <Form.Control type="submit" value="Enviar" />
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </Col>

        </Row>
    </div>
)
}


}

export default Login;
*/