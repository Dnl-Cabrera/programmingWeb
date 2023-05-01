import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../../Template/Home/Home'
import Grade from '../../Template/Grade/Grade'
import Cursos from '../../Template/Cursos/Cursos'
import MenuTeacher from '../../Template/MenuTeacher/MenuTeacher'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Grade" component={Grade} />
      <Route path="/Cursos" component={Cursos} />
      <Route path="/MenuTeacher" component={MenuTeacher} />
    </Switch>
  </main>
);

export default Main