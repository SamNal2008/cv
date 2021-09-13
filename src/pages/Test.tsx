import Container from '@material-ui/core/Container';
import { Backdrop, Box, Button, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Markdown from 'markdown-to-jsx';
// @ts-ignore
import AppMarkdown from '../images/Titi.md';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      width: '30vw',
      height: '30vh',
      top: '50%',
      left: '50%'
    },
    homeMainDiv: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        color: 'white',
      },
  }));

export default function Test() {
    document.title = 'Page de test';

    const classes = useStyles();
    const [mdFile, setMdFile] = useState<any>();
    useEffect(()=> {
      fetch(AppMarkdown)
          .then((res) => res.text())
          .then((md) => {
              setMdFile({ md })
          })
  }, [])

    return (<Box className={classes.homeMainDiv}>
        {mdFile ? <Markdown children={mdFile.md} /> : <></> }
    </Box>)
}