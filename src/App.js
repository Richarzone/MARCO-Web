import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Views/HomeView';
import AdminVisitas from './Views/AdminVisitasView';
import Exposiciones from './Views/Exposiciones';
import Guias from './Views/GuiasView';
import Visitas from './Views/CalendarioView';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/AdminVisitas" component={AdminVisitas}/>
          <Route path="/Exposiciones" component={Exposiciones}/>
          <Route path="/Guias" component={Guias}/>
          <Route path="/CalendarioVisitas" component={Visitas}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;