import React from "react";
//Import Components
import SideBar from "../../Structure/SideBar/SideBar";

class MenuTeacher extends React.Component{



    render(){
        return(
            <div className="menuTeacher">
                {console.log("Local Storage",window.localStorage.token)}
                <SideBar/>
            </div>
        )
    }


}

export default MenuTeacher;