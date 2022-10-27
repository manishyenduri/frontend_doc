import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, IndexRoute, Link} from 'react-router-dom';
import Login from './Pages/Login' 
import './style/Style.css'
import 'bootstrap/dist/css/bootstrap.css';
import dashboard from './Pages/Component/Dashboard'
import DocVerify from './Pages/Component/Document'
import OtherDoc from './Pages/Component/Otherdoc'
import ScreenDoc from './Pages/Component/Screendoc'
import ClassifiedDoc from './Pages/Component/Classifieddoc'
import MissingDoc from './Pages/Component/MissingDoc'
import Trade from './Pages/Component/Trade'
import Dpd from './Pages/Component/Dpd'
import Fema from './Pages/Component/Fema'
import Cpdd from './Pages/Component/Cpdd'

// const Home = () => <h1><Link to="/about">Click Me</Link></h1>
// const About = () => <h1>About Us</h1>

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/Dashboard" component={dashboard} />
      <Route path="/Document" component={DocVerify}/>
      <Route path="/Other-Document" component={OtherDoc}/>
      <Route path="/Screen-Document" component={ScreenDoc}/>
      <Route path="/Classified-Document" component={ClassifiedDoc}/>
      <Route path="/Missing-Document" component={MissingDoc}/>
      <Route path="/Trade" component={Trade}/>
      <Route path="/Dpd" component={Dpd}/>
      <Route path="/Fema" component={Fema}/>
      <Route path="/Cpdd" component={Cpdd}/>

    </Switch>
  </Router>
)
export default App;


