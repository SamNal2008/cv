import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#b28376',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
        marginBottom: '2%',
        minHeight: '10vh',
        aButtongnItems: 'center',
    },
    possibleLink : {
        textDecoration: 'None'
    }
}))

const NavBar = () => {

    const classes = useStyles();

    return (<nav>
        <div className={classes.root}>
          <Button>
            <Link className={classes.possibleLink} to="/"><p>Accueil</p></Link>
          </Button>
          <Button>
            <Link className={classes.possibleLink} to="/professional"><p>Projet professionnel</p></Link>
          </Button>
          <Button>
            <Link className={classes.possibleLink} to="/studies"><p>Formations</p></Link>
          </Button>
          <Button>
            <Link className={classes.possibleLink} to="/projects"><p>Projets</p></Link>
          </Button>
          <Button>
            <Link className={classes.possibleLink} to="/about"><p>A propos</p></Link>
          </Button>
        </div>
      </nav>)
}

export default NavBar;