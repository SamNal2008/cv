import React from 'react';
import './App.css';
import './App.scss';

import {
  Configuration,
  Layout,
  useLayoutNavigation,
  Text,
  Button,
} from 'react-md';

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

const routes = {};

function App() {
  return (
    <div style={{minHeight: '100vh'}}>
      <AuthContextProvider>
        <HashRouter>
          <ThemeProvider theme={defaultTheme}>
            <div style={{minHeight: '60px'}}>
              <NavBar/>
            </div>
            <div style={{minHeight: '82.5%', backgroundColor: 'whitesmoke'}}>
                <MySwitch/>
            </div>
            <div style={{minHeight: '10%'}}>
              <StickyFooter/>
            </div>
          </ThemeProvider>
        </HashRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
