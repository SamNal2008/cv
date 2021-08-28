import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NavBar from './components/Navbar';
import MySwitch from './components/MySwitch';

function App() {
  return (
    <Router>
      <NavBar/>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <div style={{paddingLeft: '5%', paddingRight: '5%'}}>
            <MySwitch/>
          </div>
  </Router>
  );
}

export default App;
