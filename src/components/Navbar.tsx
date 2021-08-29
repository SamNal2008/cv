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

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    width: '30vw',
    height: '30vh',
    top: '50%',
    left: '50%'
  },
  possibleLink: {
    textDecoration: 'None'
  },
  homeMainDiv: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
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
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          {width >= 100 ? <Button onClick={() => history.push('/')} startIcon={<HomeIcon/>}>
              {GlobalWord.Navbar.home}
          </Button> : <></>}
          {width >= 384 ? <Button onClick={() => history.push('/studies')} startIcon={<SchoolIcon/>}>
            {GlobalWord.Navbar.studies}
          </Button> : <></>}
          {width >= 768 ? <Button onClick={() => history.push('/experiences')} startIcon={<WorkIcon/>}>
            {GlobalWord.Navbar.professionalExperiences}
          </Button> : <></>}
          {width >= 1132 ? <Button onClick={() => history.push('/projects')} startIcon={<CodeIcon/>}>
            {GlobalWord.Navbar.projects}
          </Button> : <></>}
          {width >= 1536 ? <Button onClick={() => history.push('/about')} startIcon={<InfoIcon/>}>
            {GlobalWord.Navbar.about}
          </Button> : <></>}
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
                <MenuItem onClick={handleClose}><Button color='primary' startIcon={<ChatIcon/>}>{GlobalWord.Navbar.contactMe}</Button></MenuItem>
                <MenuItem onClick={() => {handleClose(); openInNewTab('https://github.com/SamNal2008');}}><Button color='primary' startIcon={<GitHubIcon/>}>{GlobalWord.Navbar.myGithub}</Button></MenuItem>
                
                  <MenuItem style={width >= 100 ? {display: 'None'} : {}}><Button color='primary' onClick={() => history.push('/')} startIcon={<HomeIcon/>}>
                    {GlobalWord.Navbar.home}
                  </Button></MenuItem>
                
                <MenuItem style={width >= 384 ? {display: 'None'} : {}}><Button color='primary' onClick={() => history.push('/studies')} startIcon={<SchoolIcon/>}>
                    {GlobalWord.Navbar.studies}
                  </Button></MenuItem>
                
                <MenuItem style={width >= 768 ? {display: 'None'} : {}}><Button color='primary' onClick={() => history.push('/experiences')} startIcon={<WorkIcon/>}>
                  {GlobalWord.Navbar.professionalExperiences}
                </Button></MenuItem>

                <MenuItem style={width >= 1132 ? {display: 'None'} : {}}><Button color='primary' onClick={() => history.push('/projects')} startIcon={<CodeIcon/>}>
                  {GlobalWord.Navbar.projects}
                </Button></MenuItem>

                <MenuItem style={width >= 1536 ? {display: 'None'} : {}}><Button color='primary' onClick={() => history.push('/about')} startIcon={<InfoIcon/>}>
                  {GlobalWord.Navbar.about}
                </Button></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar;