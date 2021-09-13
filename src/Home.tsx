import { Box, Button, Collapse, IconButton, makeStyles, Switch, Typography } from "@material-ui/core";
import { primaryMainColor } from "../utils/theme";
import Projects from "./Projects";
import Studies from "./Studies";
import profilPicture from '../images/costard.png';
import { useState } from "react";
import HomeBox from "../components/HomeBox";
import StudiesList from "../components/StudiesList";
import ProjectsList from "../components/ProjectsList";
import { useAuthState } from "../components/AuthContext";
import CreateIcon from '@material-ui/icons/Create';
import '../styles/Home.css';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '98%',
        padding: '1%',
        flexShrink: 1,
        flexGrow: 1
    },
    subBox: {
        marginTop: '50px',
        width: '98%',
        margin: 'auto',
    },
    introductionBox: {
        width: '100%',
        height: '100%',
        paddingBottom: '5%',
    },
    photo: {
        float: 'right',
        width: '40%',
        maxWidth: '300px',
        height: '100%',
        padding: '0 10px 0 15px',
    },
    description: {
        textAlign: 'justify',
        textJustify: 'inter-word',
    }
})

const Home = () => {
    document.title = 'Accueil';
    const classes = useStyles();
    const { user } = useAuthState();

    return (
        <div>
            <Box className={classes.root}>
                <Box className={classes.introductionBox}>
                    <Typography  variant='h1'>
                        Bienvenu sur mon site
                    </Typography>
                    <Box className={classes.subBox}>
                        <img className={classes.photo} src={profilPicture} alt='profile-picture'/>
                        {user?.isAdmin ? <IconButton>
                            <CreateIcon/>
                        </IconButton> : <></> }
                        <Typography className={classes.description} variant='h6'>
                            Jeune ingénieur informatique spécialisé en système d'information et génie logiciel, en dernière année à l'EPITA.  Je suis à la recherche d'un stage de fin d'étude pour une durée de 6 mois, débutant le 15 février 2022. dans le but de devenir Ingénieur en Système d'information & Génie logiciel. Je suis bon communiquant, curieux, rigoureux et organisé, avec un grand sens de l'esprit d'équipe. Passionné des nouvelles technologies depuis tout jeune, j'essaie de rester à jour avec les dernières tendances et bonnes pratiques. Grâce à mon parcours à l'Epita en SIGL et ma démarche ingénieur j'apporte une expertise technique à des problèmes concrets en prenant en compte tous les enjeux ainsi que la cohérence de tout un système d'information.
                        </Typography>
                    </Box>
                </Box>
                <HomeBox component={<StudiesList/>} message={'Afficher les formations'} title={'Formations'}/>
                <HomeBox component={<ProjectsList/>} message={'Afficher les projets'} title={'Projets'}/>
            </Box>
        </div>
    )
}

export default Home;

