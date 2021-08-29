import { Box, Button, Collapse, makeStyles, Switch, Typography } from "@material-ui/core";
import { primaryMainColor } from "../utils/theme";
import Projects from "./Projects";
import Studies from "./Studies";
import profilPicture from '../images/costard.png';
import { useState } from "react";
import HomeBox from "../components/HomeBox";
import StudiesList from "../components/StudiesList";
import ProjectsList from "../components/ProjectsList";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    subBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
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
    const [switchs, setSwitchs] = useState({
        studiesChecked: false,
        projectsChecked: false,
        professionalExperiencesChecked: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSwitchs({ ...switchs, [event.target.name]: event.target.checked });
      };

    return (
        <Box className={classes.root}>
            <Box className={classes.introductionBox}>
                <Box className={classes.subBox}>
                    <Typography variant='h1'>
                        Bonjour moi c'est Samy
                    </Typography>
                    <Typography>
                        Jeune ingénieur de l'EPITA, je suis actuellement à la recherche d'un stage de fin d'étude.
                    </Typography>
                </Box>
                <img width='20%' height='100%' style={{alignSelf: 'flex-end'}} src={profilPicture} alt='profile-picture'/>
            </Box>
            <HomeBox component={<StudiesList/>} message={'Afficher les formations'} title={'Formations'}/>
            <HomeBox component={<ProjectsList/>} message={'Afficher les projets'} title={'Projet'}/>
            
        </Box>
    )
}

export default Home;

