import { AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, useTheme } from "@material-ui/core";
import { useHistory } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import { useEffect, useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import GitHubIcon from '@material-ui/icons/GitHub';
import useLanguage, { Language } from "../utils/wording";
import React from "react";
import { openInNewTab } from "../utils/functions";
import { useAuthState } from "./AuthContext";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { signOutFromApp } from "../utils/firebase";
import ButtonLink from "./custom-material/Links/ButtonLink";
import { useMediaQuery } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolbarResponsive: {
    display: 'flex',
    justifyContent: 'flex-end',
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

const NavBar = () => {

    const classes = useStyles();
    const GlobalWord = useLanguage(Language.French);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const {isAuthenticated, user} = useAuthState();

    const theme = useTheme();
    const isDownXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));
    const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const isDownLg = useMediaQuery(theme.breakpoints.down('lg'));
    const isDownXl = useMediaQuery(theme.breakpoints.down('xl'));
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const signOutIfSignedId = () => {
      handleClose();
      if (isAuthenticated) {
        signOutFromApp()
      }
    } 

    return (
      <AppBar position="static">
        <Toolbar className={!isDownXs ? classes.toolbar : classes.toolbarResponsive}>
          {!isDownXs ? <ButtonLink content='Accueil' icon={<HomeIcon/>} path='/' />: <></>}
          {!isDownXs ? <ButtonLink content='Qui suis-je ?' icon={<InfoIcon/>} path='/about' /> : <></>}
          {!isDownSm ? <ButtonLink content='Expériences professionnelles' icon={<WorkIcon/>} path='/jobs' /> : <></>}
          {!isDownMd ? <ButtonLink content='Projets' icon={<CodeIcon/>} path='/projects'/> : <></>}
          {!isDownLg ? <ButtonLink content='Formations' icon={<SchoolIcon/>} path='/studies'/> : <></>}
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{display: 'flex', flexDirection: 'column'}}
            >
               <MenuItem onClick={handleClose} style={!isDownXs ? {display: 'None'} : {}}>
                  <ButtonLink content='Accueil' inMenu={true} icon={<HomeIcon/>} path='/'/>
                </MenuItem>

                <MenuItem style={!isDownXs ? {display: 'None'} : {}}>
                  <ButtonLink inMenu={true} content={GlobalWord.Navbar.about} path={'/about'} icon={<InfoIcon/>}/>
                </MenuItem>
                
                <MenuItem onClick={handleClose} style={!isDownSm ? {display: 'None'} : {}}>
                  <ButtonLink path='/jobs' content={GlobalWord.Navbar.job} icon={<WorkIcon/>} inMenu={true}/>
                </MenuItem>

                <MenuItem onClick={handleClose} style={!isDownMd ? {display: 'None'} : {}}>
                  <ButtonLink path='/projects' content={GlobalWord.Navbar.projects} icon={<CodeIcon/>} inMenu={true}/>
                </MenuItem>

                <MenuItem onClick={handleClose} style={!isDownLg ? {display: 'None'} : {}}>
                  <ButtonLink path='/studies' content={GlobalWord.Navbar.studies} inMenu={true} icon={<SchoolIcon/>} />
                </MenuItem>

                <MenuItem style={!isAuthenticated ? {display: 'none'} : {}} onClick={handleClose}>
                  <ButtonLink inMenu={true} path={'/profile'} content='Profile' icon={<AccountCircleIcon/>}/>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <a href='https://www.linkedin.com/in/snal' target='_blank' style={{textDecoration: 'none'}}>
                    <Button style={{backgroundColor: ''}} color='primary' startIcon={<ChatIcon/>}>{GlobalWord.Navbar.contactMe}</Button>
                  </a>
                </MenuItem>
                
                <MenuItem onClick={handleClose}>
                  <a style={{textDecoration: 'none'}} href='https://github.com/SamNal2008' onClick={handleClose} target='_blank'>
                    <Button style={{backgroundColor: ''}} color='primary' startIcon={<GitHubIcon/>}>Mon GitHub</Button>
                  </a>
                </MenuItem>

                <MenuItem onClick={signOutIfSignedId}>
                  {isAuthenticated ? <ButtonLink inMenu={true} icon={<ExitToAppIcon/>} content={'Se deconnecter'} path={'/'}/>
                  :
                  <ButtonLink inMenu={true} content={'Se connecter'} path='/login' icon={<LockOpenIcon/>}/>}
                </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar;