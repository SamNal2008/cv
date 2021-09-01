import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NavBar from './components/Navbar';
import MySwitch from './components/MySwitch';
import { Box, ThemeProvider } from '@material-ui/core';
import defaultTheme, { primaryMainColor, secondaryMainColor } from './utils/theme';
import { AuthContextProvider } from './components/AuthContext';
import StickyFooter from './components/Footer';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <ThemeProvider theme={defaultTheme}>
          <div style={{minHeight: '95vh'}}>
            <NavBar/>
            <Box style={{backgroundColor: 'whitesmoke', height: '88vh'}}>
              <MySwitch/>
            </Box>
          </div>
          <StickyFooter/>
        </ThemeProvider>
    </Router>
  </AuthContextProvider>
  );
}

export default App;
