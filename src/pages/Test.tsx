import Container from '@material-ui/core/Container';
import { Backdrop, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';


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
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [auth, setAuth] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = () => {
        console.log('Clicked on menu')
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    return (<Box className={classes.homeMainDiv} onClick={() => {
        if (open || !open) {
            setOpen(false);
        }
    }}>
        <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button>
            <Typography variant="h6" className={classes.title}>
                Photos
            </Typography>
          </Button>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
        <Button variant='contained' className={'button-backdrop'} onClick={(e) => {
            e.stopPropagation()
            setOpen(true)
        }}>
            OK
        </Button>
        <Backdrop
            className={classes.backdrop}
            open={open}
            onClick={handleClose}
            >
            OK
        </Backdrop>
    </Box>)
}