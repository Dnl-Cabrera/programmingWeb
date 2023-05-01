import React from "react";

import { Link } from 'react-router-dom';

import "./Head.css";
import imagenMenu from "../../../images/menu.png";

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainMenu: true,
    };
  }

  toggleMenu = () => {
    this.setState({
      mainMenu: !this.state.mainMenu,
    });
  };

  render() {
    return (
      <div>
        <div class="nav-father">
          <header>
            <nav class="main-nav">
              <div onClick={this.toggleMenu} class="toggle-menu">
                {" "}
                {/*Este contendor va almacenar la imagen del menu, asi
                            mismo nos permitira delimitar el tamaño que tendra la imagen dentro del contendor.*/}
                <img src={imagenMenu} alt="" />
              </div>
              <a href="index.html" class="name">
                Autonomous <span className="saltoLinea"></span>Education Web
              </a>
              <div class="navv">
                <ul
                  class={this.state.mainMenu ? "main-menu" : "main-menu--show"}
                >
                  <li class="menu_item">
                    <Link to="/" className="main-menu_link" >
                    Home
                    </Link>
                  </li>
                  <li class="menu_item">
                  <Link to="/Grade" className="main-menu_link" >
                    Grade
                    </Link>
                  </li>
                  <li class="menu_item">
                  <Link to="/Cursos" className="main-menu_link" >
                    Cursos
                    </Link>
                  </li>
                  <li class="menu_item">
                  <Link to="/MenuTeacher" className="main-menu_link" >
                    Iniciar sesión
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
        
      </div>
    );
  }
}

export default Head;
