import { Box, makeStyles, Typography } from "@material-ui/core";
import StudyCard from "../components/StudyCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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

const Studies = (): JSX.Element => {
    const classes = useStyles();
    document.title = 'Formations';
    return (
        <Box className={classes.root}>
            <Typography variant='h1'>
                Formations
            </Typography>
            <Box className={'BasicBox'}>
                <Typography variant={'h1'}>
                    EPITA
                </Typography>
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
            <StudyCard></StudyCard>
        </Box>
    )
}

export default Studies;