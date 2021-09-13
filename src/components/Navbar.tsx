import { AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Link } from "@material-ui/core";
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

    return (
      <AppBar position="static" style={{height: '100%'}}>
        <Toolbar className={classes.toolbar}>
          {width >= 100 ? <ButtonLink content='Accueil' icon={<HomeIcon/>} path='/' />: <></>}
          {width >= 384 ? <ButtonLink content='Formations' icon={<SchoolIcon/>} path='/studies'/> : <></>}
          {false && width >= 768 ? <ButtonLink content='Expériences professionnelles' icon={<WorkIcon/>} path='/experiences' /> : <></>}
          {width >= 1132 ? <ButtonLink content='Projets' icon={<CodeIcon/>} path='/projects'/> : <></>}
          {false && width >= 1536 ? <ButtonLink content='A propos' icon={<InfoIcon/>} path='/about' /> : <></>}
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
                <MenuItem onClick={handleClose}><Button style={{backgroundColor: ''}} color='primary' onClick={() => {handleClose(); openInNewTab('https://www.linkedin.com/in/snal')}} startIcon={<ChatIcon/>}>{GlobalWord.Navbar.contactMe}</Button></MenuItem>
                <MenuItem onClick={() => {handleClose(); openInNewTab('https://github.com/SamNal2008');}}><Button style={{backgroundColor: ''}} color='primary' startIcon={<GitHubIcon/>}>{GlobalWord.Navbar.myGithub}</Button></MenuItem>
                
                  <MenuItem style={width >= 100 ? {display: 'None'} : {}}><Button style={{backgroundColor: ''}} color='primary' onClick={() => {handleClose(); history.push('/')}} startIcon={<HomeIcon/>}>
                    {GlobalWord.Navbar.home}
                  </Button></MenuItem>
                
                <MenuItem style={width >= 384 ? {display: 'None'} : {}}><Button style={{backgroundColor: ''}} color='primary' onClick={() => {handleClose(); history.push('/studies')}} startIcon={<SchoolIcon/>}>
                    {GlobalWord.Navbar.studies}
                  </Button></MenuItem>
                
                <MenuItem style={true || width >= 768 ? {display: 'None'} : {}}><Button style={{backgroundColor: ''}} color='primary' onClick={() => {handleClose(); history.push('/experiences')}} startIcon={<WorkIcon/>}>
                  {GlobalWord.Navbar.professionalExperiences}
                </Button></MenuItem>

                <MenuItem style={width >= 1132 ? {display: 'None'} : {}}><Button style={{backgroundColor: ''}} color='primary' onClick={() => {handleClose(); history.push('/projects')}} startIcon={<CodeIcon/>}>
                  {GlobalWord.Navbar.projects}
                </Button></MenuItem>

                <MenuItem style={true || width >= 1536 ? {display: 'None'} : {}}><Button style={{backgroundColor: ''}} color='primary' onClick={() => {handleClose(); history.push('/about')}} startIcon={<InfoIcon/>}>
                  {GlobalWord.Navbar.about}
                </Button></MenuItem>

                <MenuItem style={!isAuthenticated ? {display: 'None'} : {}}><Button style={{backgroundColor: ''}} color='primary' onClick={() => {handleClose(); history.push('/profile')}} startIcon={<AccountCircleIcon/>}>
                  {isAuthenticated && user.displayName ? user.displayName : 'Profile'}
                </Button></MenuItem>

                <MenuItem>
                  {isAuthenticated ? <Button style={{backgroundColor: ''}} color='primary' onClick={() => {handleClose(); signOutFromApp(); history.push('/')}} startIcon={<ExitToAppIcon/>}>
                    Se deconnecter
                  </Button> : <Button style={{backgroundColor: ''}} color='primary' onClick={() => {handleClose(); history.push('/login');}} startIcon={<LockOpenIcon/>}>
                    Se connecter
                  </Button>}
                </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar;