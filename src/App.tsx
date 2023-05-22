import React from 'react'
import './globalStyles.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import Team from './pages/Team';
import Country from './pages/Country';
import Details from './pages/Details';
import League from './pages/League';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/Team" component={Team} />
        <Route path="/Country" component={Country} />
        <Route path="/Details" component={Details} />
        <Route path="/League" component={League} />
      </Switch>
    </Router>
  )
}

export default App