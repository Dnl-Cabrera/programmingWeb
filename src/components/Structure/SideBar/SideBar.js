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

import "./SideBar.css";

class SideBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: true,
            estadoSideNavBar: true,
            estadoNavBar: true,

        };
    }
    //toggleFunction permite cambiar el estado de expanded.
    toggleFunction() {
        console.log(this.state.estadoSideNavBar)
        this.setState({
            expanded: !this.state.expanded,
            estadoSideNavBar: !this.state.estadoSideNavBar,
        })
    }

    toggleFunctionNavBar () {
        this.setState({
            estadoNavBar: !this.state.estadoNavBar,
        })
    }

    render() {
        return (
            <div style={{ width: 240 }} className="padreSideBar">

                <div className={this.state.estadoSideNavBar ? "backgroundSideNav" : "backgroundSideNav1"}>

                <Navbar className="navBarinSideBar" collapseOnSelect expand="lg" bg="dark" variant="dark" >
                        <Container>
                            <Navbar.Brand>
                                Autonomous <span className="saltoLineaName"></span>Education Web
                            </Navbar.Brand>
                            {/*Para agregar una función Onlcick que lea los estados se debe agregar una variable, en este caso botton, para uqe
                            lea la función. */}
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="BottonNav" onClick={botton=>this.toggleFunctionNavBar()}/>
                            <div className="prueba d-flex justify-content-end">

                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Navv className="items">
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
                <Sidenav expanded={this.state.expanded} defaultOpenKeys={['1', '4']}>
                    {/*sideNav.Toggle es el boton para contraer o extender el sideNav. onToggle es un eveto que contrae o no un elemento,
                    ademas este evento se le esta indicando que a la propiedad expanded cambie el valor segun la función toggleFunction. */}
                    <Sidenav.Toggle onToggle={expanded => this.toggleFunction()} />
                    {/*Sidenav.Body es el que indica el comienzo del sidenav */}
                    <Sidenav.Body>
                        {/*Nav indica el comienzo de la lista de navegación. */}
                        <Nav activeKey={this.state.activeKey} >
                            {/*Nav.Item indica un elemento de la lista de navegación. evenKey es una referencia para activar el despliegue
                            si el Nav.Item es desplegable desde defaultOpenKeys desde Sidenav (linea 38)*/}
                            <Nav.Item eventKey="0" icon={<PageEndIcon />}>
                                Curso 804
                            </Nav.Item>
                            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                                Publicaciones
                            </Nav.Item>
                            <Nav.Item eventKey="2" icon={<TaskIcon />}>
                                Actividades
                            </Nav.Item>
                            {/*Nav.Menu es para indicar un item que tenga una lista desplegable. */}
                            <Nav.Item eventKey="3" icon={<EventDetailIcon />}>
                                Rubricas evaluación
                            </Nav.Item>
                            <Nav.Item eventKey="4" icon={<TmallIcon />}>
                                Mensajes
                            </Nav.Item>
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
                <div className="contenidoSideBar container-fluid">
                <div className={this.state.estadoNavBar && this.state.estadoSideNavBar? 
                                "bodyStyle" : 
                                this.state.estadoNavBar && !this.state.estadoSideNavBar?
                                "bodyStyle1":
                                !this.state.estadoNavBar && !this.state.estadoSideNavBar?
                                "bodyStyle2":
                                "bodyStyle"}>
                <div className="contenidoSideBar1">
                        <Tweet/>
                        <Post/>
                    </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default SideBar;