import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Search from './components/pages/Search/Search';
import SignUp from './components/pages/SignUp/SignUp';
import AddData from './components/pages/AddData/AddData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/search' component={Search} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/adddata' component={AddData} />
      </Switch>
    </Router>
    
  );
}

export default App;
