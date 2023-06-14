import React from "react";
//React components

//Own components
import SideBarAdministrator from "../../../Structure/SideBarAdministrator/SideBarAdministrator";

//Css
import "./MenuAdministrator.css"

class QueryEmpleados extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
         
        };
      }

    render(){
        return(
            <div className="MenuAdministrator">
                <SideBarAdministrator>
                    <h1>Hola mundo</h1>
                </SideBarAdministrator>
            </div>
        )
    }


}

export default QueryEmpleados;