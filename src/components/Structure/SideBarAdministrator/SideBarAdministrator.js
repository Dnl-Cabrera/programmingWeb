import React, { useState, useEffect } from "react";
// or
import Sidenav from 'rsuite/Sidenav';
import Nav from 'rsuite/Nav';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import TaskIcon from '@rsuite/icons/Task';
import TmallIcon from '@rsuite/icons/Tmall';
import TableIcon from '@rsuite/icons/Table';
import PeoplesMapIcon from '@rsuite/icons/PeoplesMap';
import EventDetailIcon from '@rsuite/icons/EventDetail';
import PageEndIcon from '@rsuite/icons/PageEnd';
import TreeIcon from '@rsuite/icons/Tree';
import SingleSourceIcon from '@rsuite/icons/SingleSource';

//Import NavBar para realizar el componente aparte
import Container from 'react-bootstrap/Container';
import Navv from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from 'react-router-dom';

import Post from "../Post/Post";
import Tweet from "../Tweet/Tweet"

//Para utilizar la libreria de rsuite, se debe importar el css0
import 'rsuite/dist/rsuite.min.css';

import "./SideBarAdministrator.css";


/*Se tuvo que volver un componente de funcion debido a que el sidebar de react suite utiliza para redireccionar funciones de clase. */
const SideBarAdministrator = (props) => {

    let navigate = useNavigate();

    const [expanded, setExpanded] = useState(true);
    const [estadoSideNavBarAdmin, setEstadoSideNavBarAdmin] = useState(true);
    const [estadoNavBarAdmin, setEstadoNavBarAdmin] = useState(true);

    //toggleFunction permite cambiar el estado de expanded.
    const toggleFunction = () => {
        console.log(estadoSideNavBarAdmin);
        setExpanded(!expanded);
        setEstadoSideNavBarAdmin(!estadoSideNavBarAdmin);
    }

    const toggleFunctionNavBar = () => {
        setEstadoNavBarAdmin(!estadoNavBarAdmin);
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            
        }
        else{
            localStorage.setItem('Error','Error 401 (Unauthorized)')
            navigate('/Error')
        }
    })

    /*this function is for redirect another link used the library Link from react-router-dom
    this link for more information
    https://rsuitejs.com/guide/composition/#react-router-dom */
    const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
        <Link ref={ref} to={href} {...rest}>
            {children}
        </Link>
    ));

    return (
        <div style={{ width: 240 }} className="padreSideBarAdmin">

            <div className={estadoSideNavBarAdmin ? "backgroundSideNavAdmin" : "backgroundSideNav1Admin"}>

                <Navbar className="navBarinSideBarAdmin" collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Container Style="background: linear-gradient(#333, #000);">
                        <Navbar.Brand>
                            Autonomous <span className="saltoLineaNameAdmin"></span>Education Web
                        </Navbar.Brand>
                        {/*Para agregar una función Onlcick que lea los estados se debe agregar una variable, en este caso botton, para uqe
                        lea la función. */}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="BottonNavAdmin" onClick={botton => toggleFunctionNavBar()} />
                        <div className="prueba d-flex justify-content-end">

                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Navv className="itemsAdmin">
                                    <Navv.Link href="#deets">Configuración</Navv.Link>
                                    <Link to='/'>
                                        <Navv.Link eventKey={2} href="#memes">

                                            Cerrar Sesión

                                        </Navv.Link>
                                    </Link>
                                </Navv>
                            </Navbar.Collapse>
                        </div>

                    </Container>
                </Navbar>

            </div>

            {/*Sidenav permite determinar si se expande o no el sideNav, ademas con deaultOpenKeys, permite indicar que Nav.Item se despli
            automaticamente, al cargar la pagina. */}
            <Sidenav expanded={expanded} defaultOpenKeys={['1', '4']}>
                {/*sideNav.Toggle es el boton para contraer o extender el sideNav. onToggle es un eveto que contrae o no un elemento,
                ademas este evento se le esta indicando que a la propiedad expanded cambie el valor segun la función toggleFunction. */}
                <Sidenav.Toggle onToggle={expanded => toggleFunction()} />
                {/*Sidenav.Body es el que indica el comienzo del sidenav */}
                <Sidenav.Body>
                    {/*Nav indica el comienzo de la lista de navegación. */}
                    <Nav className="navMenuItemAdmin" >
                        {/*Nav.Item indica un elemento de la lista de navegación. evenKey es una referencia para activar el despliegue
                        si el Nav.Item es desplegable desde defaultOpenKeys desde Sidenav (linea 38)*/}

                        <Nav.Menu placement="rightStart" eventKey="1" title="Empleados" icon={<PageEndIcon />}>

                            {/*for redirect another page without recharged page is necesary add like atribute "as".
                            in "as" our indicate the function NavLink.
                            NavLink es a function that relationshin the library Link from react-router-dom */}
                            <Nav.Item eventKey="1-1" as={NavLink} href="/MenuAdministrador/AddEmployee">
                                Agregar empleados
                            </Nav.Item>


                            <Nav.Item eventKey="1-2" as={NavLink} href="/MenuAdministrador/QueryEmployee">
                                Consultar empleados
                            </Nav.Item>


                            <Nav.Item eventKey="1-3" as={NavLink} href="/MenuAdministrador/EditEmployee">
                                Editar empleados
                            </Nav.Item>

                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="2" title="Estudiantes y padres" icon={<DashboardIcon />}>
                            <Nav.Item eventKey="2-1">Agregar estudiante</Nav.Item>
                            <Nav.Item eventKey="2-2">Consultar estudiante</Nav.Item>
                            <Nav.Item eventKey="2-3">Editar estudiante</Nav.Item>
                        </Nav.Menu>

                        <Nav.Menu placement="rightStart" eventKey="3" title="Grados" icon={<TmallIcon />}>
                            <Nav.Item eventKey="3-1">Estos campos deben consultarse en la base de datos</Nav.Item>
                            <Nav.Item eventKey="3-2">Decimo</Nav.Item>
                            <Nav.Item eventKey="3-3">Once</Nav.Item>
                        </Nav.Menu>

                        <Nav.Item eventKey="5" icon={<PeoplesMapIcon />}>
                            Lista estudiantes
                        </Nav.Item>
                        <Nav.Item eventKey="6" icon={<TableIcon />}>
                            Notas
                        </Nav.Item>
                        <Nav.Menu placement="rightStart" eventKey="7" title="Cursos" icon={<TreeIcon />}>
                            <Nav.Item eventKey="7-1">804</Nav.Item>
                            <Nav.Item eventKey="7-2">805</Nav.Item>
                            <Nav.Item eventKey="7-3">1003</Nav.Item>
                        </Nav.Menu>
                        <Nav.Menu placement="rightStart" eventKey="8" title="Asignaturas" icon={<SingleSourceIcon />}>
                            <Nav.Item eventKey="8-1">Matematicas</Nav.Item>
                            <Nav.Item eventKey="8-2">Programación</Nav.Item>
                            <Nav.Item eventKey="8-3">Informatica</Nav.Item>
                        </Nav.Menu>
                    </Nav>
                </Sidenav.Body>

            </Sidenav>
            {/*Se esta evaluando todos los escenarios con los dos botones del side bar y del nav bar, para que el contenido se ajuste a 
            la pantalla */}
            <div className="contenidoSideBarAdmin container-fluid">
                <div className={estadoNavBarAdmin && estadoSideNavBarAdmin ?
                    "bodyStyle" :
                    estadoNavBarAdmin && !estadoSideNavBarAdmin ?
                        "bodyStyle1" :
                        !estadoNavBarAdmin && !estadoSideNavBarAdmin ?
                            "bodyStyle2" :
                            "bodyStyle"}>
                    <div className="contenidoSideBar1Admin">

                        {props.children}

                    </div>
                </div>
            </div>
        </div>
    )



}

export default SideBarAdministrator;


/*
import React from "react";
// or
import Sidenav from 'rsuite/Sidenav';
import Nav from 'rsuite/Nav';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import TaskIcon from '@rsuite/icons/Task';
import TmallIcon from '@rsuite/icons/Tmall';
import TableIcon from '@rsuite/icons/Table';
import PeoplesMapIcon from '@rsuite/icons/PeoplesMap';
import EventDetailIcon from '@rsuite/icons/EventDetail';
import PageEndIcon from '@rsuite/icons/PageEnd';
import TreeIcon from '@rsuite/icons/Tree';
import SingleSourceIcon from '@rsuite/icons/SingleSource';

//Import NavBar para realizar el componente aparte
import Container from 'react-bootstrap/Container';
import Navv from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import Post from "../Post/Post";
import Tweet from "../Tweet/Tweet"

//Para utilizar la libreria de rsuite, se debe importar el css0
import 'rsuite/dist/rsuite.min.css';

import "./SideBarAdministrator.css";

class SideBarAdministrator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: true,
            estadoSideNavBarAdmin: true,
            estadoNavBarAdmin: true,

        };
    }
    //toggleFunction permite cambiar el estado de expanded.
    toggleFunction() {
        console.log(this.state.estadoSideNavBarAdmin)
        this.setState({
            expanded: !this.state.expanded,
            estadoSideNavBarAdmin: !this.state.estadoSideNavBarAdmin,
        })
    }

    toggleFunctionNavBar() {
        this.setState({
            estadoNavBarAdmin: !this.state.estadoNavBarAdmin,
        })
    }
    
    onSelect(){
        alert("Hola")
    }

    NavLink


    render() {
        return (
            <div style={{ width: 240 }} className="padreSideBarAdmin">

                <div className={this.state.estadoSideNavBarAdmin ? "backgroundSideNavAdmin" : "backgroundSideNav1Admin"}>

                    <Navbar className="navBarinSideBarAdmin" collapseOnSelect expand="lg" bg="dark" variant="dark" >
                        <Container Style="background: linear-gradient(#333, #000);">
                            <Navbar.Brand>
                                Autonomous <span className="saltoLineaNameAdmin"></span>Education Web
                            </Navbar.Brand>
                            {/*Para agregar una función Onlcick que lea los estados se debe agregar una variable, en este caso botton, para uqe
                            lea la función. }
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="BottonNavAdmin" onClick={botton => this.toggleFunctionNavBar()} />
                            <div className="prueba d-flex justify-content-end">

                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Navv className="itemsAdmin">
                                        <Navv.Link href="#deets">Configuración</Navv.Link>
                                        <Link to='/'>
                                            <Navv.Link eventKey={2} href="#memes">

                                                Cerrar Sesión

                                            </Navv.Link>
                                        </Link>
                                    </Navv>
                                </Navbar.Collapse>
                            </div>

                        </Container>
                    </Navbar>

                </div>

                {/*Sidenav permite determinar si se expande o no el sideNav, ademas con deaultOpenKeys, permite indicar que Nav.Item se despli
                automaticamente, al cargar la pagina. }
                <Sidenav expanded={this.state.expanded} defaultOpenKeys={['1', '4']}>
                    {/*sideNav.Toggle es el boton para contraer o extender el sideNav. onToggle es un eveto que contrae o no un elemento,
                    ademas este evento se le esta indicando que a la propiedad expanded cambie el valor segun la función toggleFunction. }
                    <Sidenav.Toggle onToggle={expanded => this.toggleFunction()} />
                    {/*Sidenav.Body es el que indica el comienzo del sidenav }
                    <Sidenav.Body>
                        {/*Nav indica el comienzo de la lista de navegación. }
                        <Nav activeKey={this.state.activeKey} className="navMenuItemAdmin" >
                            {/*Nav.Item indica un elemento de la lista de navegación. evenKey es una referencia para activar el despliegue
                            si el Nav.Item es desplegable desde defaultOpenKeys desde Sidenav (linea 38)}

                            <Nav.Menu placement="rightStart" eventKey="1" title="Empleados" icon={<PageEndIcon />}>
                                
                                    <Nav.Item eventKey="1-1" as={NavLink} href="/MenuAdministrador/AddEmployee">
                                    Agregar empleados
                                    </Nav.Item>
                                
                                
                                <Nav.Item eventKey="1-2" as={NavLink} href="/MenuAdministrador/QueryEmployee">
                                Consultar empleados
                                </Nav.Item>
                                
                                
                                <Nav.Item eventKey="1-3" as={NavLink} href="/MenuAdministrador/EditEmployee">
                                   Editar empleados
                                </Nav.Item>
                                
                            </Nav.Menu>
                            <Nav.Menu placement="rightStart" eventKey="2" title="Estudiantes y padres" icon={<DashboardIcon />}>
                                <Nav.Item eventKey="2-1">Agregar estudiante</Nav.Item>
                                <Nav.Item eventKey="2-2">Consultar estudiante</Nav.Item>
                                <Nav.Item eventKey="2-3">Editar estudiante</Nav.Item>
                            </Nav.Menu>

                            <Nav.Menu placement="rightStart" eventKey="3" title="Grados" icon={<TmallIcon />}>
                                <Nav.Item eventKey="3-1">Estos campos deben consultarse en la base de datos</Nav.Item>
                                <Nav.Item eventKey="3-2">Decimo</Nav.Item>
                                <Nav.Item eventKey="3-3">Once</Nav.Item>
                            </Nav.Menu>

                            <Nav.Item eventKey="5" icon={<PeoplesMapIcon />}>
                                Lista estudiantes
                            </Nav.Item>
                            <Nav.Item eventKey="6" icon={<TableIcon />}>
                                Notas
                            </Nav.Item>
                            <Nav.Menu placement="rightStart" eventKey="7" title="Cursos" icon={<TreeIcon />}>
                                <Nav.Item eventKey="7-1">804</Nav.Item>
                                <Nav.Item eventKey="7-2">805</Nav.Item>
                                <Nav.Item eventKey="7-3">1003</Nav.Item>
                            </Nav.Menu>
                            <Nav.Menu placement="rightStart" eventKey="8" title="Asignaturas" icon={<SingleSourceIcon />}>
                                <Nav.Item eventKey="8-1">Matematicas</Nav.Item>
                                <Nav.Item eventKey="8-2">Programación</Nav.Item>
                                <Nav.Item eventKey="8-3">Informatica</Nav.Item>
                            </Nav.Menu>
                        </Nav>
                    </Sidenav.Body>

                </Sidenav>
                {/*Se esta evaluando todos los escenarios con los dos botones del side bar y del nav bar, para que el contenido se ajuste a 
                la pantalla }
                <div className="contenidoSideBarAdmin container-fluid">
                    <div className={this.state.estadoNavBarAdmin && this.state.estadoSideNavBarAdmin ?
                        "bodyStyle" :
                        this.state.estadoNavBarAdmin && !this.state.estadoSideNavBarAdmin ?
                            "bodyStyle1" :
                            !this.state.estadoNavBarAdmin && !this.state.estadoSideNavBarAdmin ?
                                "bodyStyle2" :
                                "bodyStyle"}>
                        <div className="contenidoSideBar1Admin">

                            {this.props.children}

                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default SideBarAdministrator;
*/