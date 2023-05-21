import React from 'react'
import './globalStyles.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Team from './pages/Team';
import Country from './pages/Country';
import Details from './pages/Details';
import League from './pages/Details';
import Season from './pages/Details';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Team" component={Team} />
        <Route path="/Country" component={Country} />
        <Route path="/Details" component={Details} />
        <Route path="/League" component={League} />
        <Route path="/Season" component={Season} />
      </Switch>
    </Router>
  )
}

export default App