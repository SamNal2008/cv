import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import NavBar from './components/Navbar';
import MySwitch from './components/MySwitch';
import { Box, ThemeProvider } from '@material-ui/core';
import defaultTheme from './utils/theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={defaultTheme}>
        <NavBar/>
        <Box margin='5%' display='flex' justifyContent='center' alignItems='center' flex='1' flexDirection='column'>
          <MySwitch/>
        </Box>
      </ThemeProvider>
  </Router>
  );
}

export default App;
