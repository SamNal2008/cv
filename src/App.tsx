import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NavBar from './components/Navbar';
import MySwitch from './components/MySwitch';
import { Box, ThemeProvider } from '@material-ui/core';
import defaultTheme, { primaryMainColor, secondaryMainColor } from './utils/theme';
import { AuthContextProvider } from './utils/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <ThemeProvider theme={defaultTheme}>
          <NavBar/>
            <Box padding='4%' display='flex' justifyContent='center' alignItems='center' flex='1' flexDirection='column' style={{backgroundColor: 'whitesmoke'}}>
              <MySwitch/>
            </Box>
        </ThemeProvider>
    </Router>
  </AuthContextProvider>
  );
}

export default App;
