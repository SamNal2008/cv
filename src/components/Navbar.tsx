import { AppBar, Button, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import { primaryMainColor } from "../utils/theme";
import { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import CodeIcon from '@material-ui/icons/Code';
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import GitHubIcon from '@material-ui/icons/GitHub';

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

const NavBar = () => {

    const classes = useStyles();
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button onClick={() => history.push('/')} startIcon={<HomeIcon/>}>
            Accueil
          </Button>
          <Button onClick={() => history.push('/studies')} startIcon={<SchoolIcon/>}>
            Formations
          </Button>
          <Button onClick={() => history.push('/experiences')} startIcon={<SchoolIcon/>}>
            Expérience professionnel
          </Button>
          <Button onClick={() => history.push('/projects')} startIcon={<CodeIcon/>}>
            Projets
          </Button>
          <Button onClick={() => history.push('/about')} startIcon={<InfoIcon/>}>
            A propos
          </Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <MenuItem onClick={handleClose}><Button color='primary' startIcon={<ChatIcon/>}>Me contacter</Button></MenuItem>
            <MenuItem onClick={handleClose}><Button color='primary' startIcon={<GitHubIcon/>}>Mon GitHub</Button></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    )
}

export default NavBar;