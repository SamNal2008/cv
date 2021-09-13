import React from 'react';
import './App.css';
import {
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import NavBar from './components/Navbar';
import MySwitch from './components/MySwitch';
import { Box, ThemeProvider } from '@material-ui/core';
import defaultTheme, { primaryMainColor, secondaryMainColor } from './utils/theme';
import { AuthContextProvider } from './components/AuthContext';
import StickyFooter from './components/Footer';

function App() {
  return (
    <div style={{height: '100vh'}}>
      <AuthContextProvider>
        <BrowserRouter>
          <ThemeProvider theme={defaultTheme}>
            <div style={{height: '60px'}}>
              <NavBar/>
            </div>
            <div style={{minHeight: '82.5%', backgroundColor: 'whitesmoke'}}>
                <MySwitch/>
            </div>
            <div style={{height: '10%'}}>
              <StickyFooter/>
            </div>
          </ThemeProvider>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
