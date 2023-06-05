import React from "react";
//React components

//Own components
import SideBarAdministrator from "../../Structure/SideBarAdministrator/SideBarAdministrator";

//Css
import "./MenuAdministrator.css"

class MenuAdministrator extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
         
        };
      }

    render(){
        return(
            <div className="MenuAdministrator">
                <SideBarAdministrator/>
            </div>
        )
    }


}

export default MenuAdministrator;