import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10%',
        display: 'flex',
        flexDirection: 'column',
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

const Home = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={'BasicBox'}>
                <h1>
                    EPITA
                </h1>
                <h2>
                    Ingénieur spécialisé en <span>système d'information et génie logiciel</span> : 2016 - 2022
                </h2>
                <p>
                    Aujourd'hui on va écrire un peu de texte par exemple comme ça.Aujourd'hui on va écrire un peu de texte par exemple comme ça.Aujourd'hui on va écrire un peu de texte par exemple comme ça.Aujourd'hui on va écrire un peu de texte par exemple comme ça.
                </p>    
            </Box>
            <Box className={'BasicBox'}>
                <h1>
                    Titre
                </h1>
                <h2>
                    Sous titre
                </h2>
            </Box>
            <Box className={'BasicBox'}>
                <h1>
                    Titre
                </h1>
                <h2>
                    Sous titre
                </h2>
            </Box>
        </Box>
    )
}

export default Home;