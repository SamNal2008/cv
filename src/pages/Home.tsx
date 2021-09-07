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
        width: '98%',
        padding: '1%'
    },
    subBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        paddingRight: '20%',
        marginBottom: '2%'
    },
    introductionBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        paddingBottom: '5%',
    },
    subTitleBox: {
        backgroundColor: primaryMainColor,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
                    <Box className={classes.subBox}>
                        <Typography  variant='h1'>
                            Bienvenu sur mon site
                        </Typography>
                        <Typography variant='h6' style={{paddingLeft: '10%', paddingTop:'5%'}}>
                            {"Jeune ingénieur informatique spécialisé en système d'information et génie logiciel, en dernière année à l'EPITA.  Je suis à la recherche d'un stage de fin d'étude pour une durée de 6 mois, débutant le 15 février 2022. dans le but de devenir Ingénieur en Système d'information & Génie logiciel. Je suis bon communiquant, curieux, rigoureux et organisé, avec un grand sens de l'esprit d'équipe. Passionné des nouvelles technologies depuis tout jeune, j'essaie de rester à jour avec les dernières tendances et bonnes pratiques. Grâce à mon parcours à l'Epita en SIGL et ma démarche ingénieur j'apporte une expertise technique à des problèmes concrets en prenant en compte tous les enjeux ainsi que la cohérence de tout un système d'information."}
                        </Typography>
                    </Box>
                        <img width='20%' height='100%' style={{alignSelf: 'flex-end'}} src={profilPicture} alt='profile-picture'/>
                        {user?.isAdmin ? <IconButton>
                            <CreateIcon/>
                        </IconButton> : <></> }
                </Box>
                <HomeBox component={<StudiesList/>} message={'Afficher les formations'} title={'Formations'}/>
                <HomeBox component={<ProjectsList/>} message={'Afficher les projets'} title={'Projets'}/>
            </Box>
        </div>
    )
}

export default Home;

