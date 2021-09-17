import { AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
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

const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;



const NavBar = () => {

    const classes = useStyles();
    const history = useHistory();
    const GlobalWord = useLanguage(Language.French);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [width, setWidth] = useState(getWidth());
    const {isAuthenticated, user} = useAuthState();
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
      const resizeListener = () => {
        setWidth(getWidth());
      };
      window.addEventListener('resize', resizeListener);

      return () => {
        window.removeEventListener('resize', resizeListener);
      }
    }, []);

    const signOutIfSignedId = () => {
      handleClose();
      if (isAuthenticated) {
        signOutFromApp()
      }
    }

    return (
      <AppBar position="static" style={{height: '100%'}}>
        <Toolbar className={classes.toolbar}>
          {width >= 100 ? <ButtonLink content='Accueil' icon={<HomeIcon/>} path='/' />: <></>}
          {width >= 384 ? <ButtonLink content='Formations' icon={<SchoolIcon/>} path='/studies'/> : <></>}
          {width >= 768 ? <ButtonLink content='Expériences professionnelles' icon={<WorkIcon/>} path='/jobs' /> : <></>}
          {width >= 1132 ? <ButtonLink content='Projets' icon={<CodeIcon/>} path='/projects'/> : <></>}
          {width >= 1536 ? <ButtonLink content='A propos' icon={<InfoIcon/>} path='/about' /> : <></>}
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
          
                <MenuItem onClick={handleClose} style={width >= 100 ? {display: 'None'} : {}}>
                  <ButtonLink content='Accueil' inMenu={true} icon={<HomeIcon/>} path='/'/>
                </MenuItem>
    
                <MenuItem onClick={handleClose} style={width >= 384 ? {display: 'None'} : {}}>
                  <ButtonLink path='/studies' content={GlobalWord.Navbar.studies} inMenu={true} icon={<SchoolIcon/>} />
                </MenuItem>
                
                <MenuItem onClick={handleClose} style={width >= 768 ? {display: 'None'} : {}}>
                  <ButtonLink path='/jobs' content={GlobalWord.Navbar.job} icon={<WorkIcon/>} inMenu={true}/>
                </MenuItem>

                <MenuItem onClick={handleClose} style={width >= 1132 ? {display: 'None'} : {}}>
                  <ButtonLink path='/projects' content={GlobalWord.Navbar.projects} icon={<CodeIcon/>} inMenu={true}/>
                </MenuItem>

                <MenuItem style={width >= 1536 ? {display: 'None'} : {}}>
                  <ButtonLink inMenu={true} content={GlobalWord.Navbar.about} path={'/about'} icon={<InfoIcon/>}/>
                </MenuItem>

                <MenuItem style={!isAuthenticated ? {display: 'none'} : {}} onClick={handleClose}>
                  <ButtonLink inMenu={true} path={'/profile'} content='Profile' icon={<AccountCircleIcon/>}/>
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