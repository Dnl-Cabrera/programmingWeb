import React, { useRef } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Home from '../../Template/Home/Home'
import Grade from '../../Template/Grade/Grade'
import Cursos from '../../Template/Cursos/Cursos'
import MenuTeacher from '../../Template/MenuTeacher/MenuTeacher'
import Error from '../../Template/Error/Error'
//Template AdministradorEmpleados
import AddEmpleados from '../../Template/Administrador/Empleados/AddEmpleados/AddEmpleados'
import EditEmpleados from '../../Template/Administrador/Empleados/EditEmpleados/EditEmpleados'
import QueryEmpleados from '../../Template/Administrador/Empleados/QueryEmpleados/QueryEmpleados'

import Login from '../../Template/Login/Login'
import { useState } from 'react'

const Main = ({dataSend}) => {

  let navigates =useNavigate();

  const recibirDatos=(datos,navigate)=>{
    //setNavigate(ObtainNavigate);
    //funcionNavigateRef=console.log("EnvioDatos")
    dataSend(datos,navigate);
  }

  return(
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/Grade" element={<Grade/>} />
      <Route path="/Cursos" element={<Cursos/>} />
      <Route path="/MenuTeacher" element={<MenuTeacher/>} /> 
      <Route path="/MenuAdministrador/QueryEmployee" element={<QueryEmpleados navigateFunction={navigates}/>} />
      <Route path="/MenuAdministrador/AddEmployee" element={<AddEmpleados/>} />
      <Route path="/MenuAdministrador/EditEmployee" element={<EditEmpleados/>} />
      <Route path="/Error" element={<Error/>}/>
      
      {/*Cuando utilizamos component no podemos utilizar o indicar
      si el componente recibe algun dato, para solucionar esto debemos extender el componente Route y dentro de el
      indicamos el componente completo para acceder a los datos que puede recibir o enviar. */}
      <Route path="/Login" element={<Login dataSend={recibirDatos}/>}/>
      
    </Routes>
);

}

export default Main