import React from "react";
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
                    <a href="Home.html" class="main-menu_link">
                      Home
                    </a>
                  </li>
                  <li class="menu_item">
                    <a href="about.html" class="main-menu_link">
                      Grados
                    </a>
                  </li>
                  <li class="menu_item">
                    <a href="Course.html" class="main-menu_link">
                      Cursos
                    </a>
                  </li>
                  <li class="menu_item">
                    <a href="ContacUs.html" class="main-menu_link">
                      Calificaciones
                    </a>
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
