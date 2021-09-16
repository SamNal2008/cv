import { Box, IconButton, makeStyles, TextField, Typography, TextareaAutosize, Button, CircularProgress } from "@material-ui/core";
import profilPicture from '../images/costard.png';
import HomeBox from "../components/HomeBox";
import StudiesList from "../components/StudiesList";
import ProjectsList from "../components/ProjectsList";
import { useAuthState } from "../components/AuthContext";
import CreateIcon from '@material-ui/icons/Create';
import '../styles/Home.css';
import { useEffect, useState } from "react";
import HomeContent from "../utils/home";
import { firestore, get, save } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import JobsList from "../components/JobsList";
import { Link } from "react-router-dom";

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
    },
    textArea: {
        minHeight: '30vh',
        minWidth: '50vw',
    }
})

const Home = () => {
    document.title = 'Accueil';
    const classes = useStyles();
    const { user } = useAuthState();

    const [home, setHome] = useState<HomeContent>({
        id: 'home',
        mainTitle: 'Bienvenue sur mon site',
        textDescriptor: "Jeune ingénieur informatique spécialisé en système d'information et génie logiciel, en dernière année à l'EPITA.  Je suis à la recherche d'un stage de fin d'étude pour une durée de 6 mois, débutant le 15 février 2022. dans le but de devenir Ingénieur en Système d'information & Génie logiciel. Je suis bon communiquant, curieux, rigoureux et organisé, avec un grand sens de l'esprit d'équipe. Passionné des nouvelles technologies depuis tout jeune, j'essaie de rester à jour avec les dernières tendances et bonnes pratiques. Grâce à mon parcours à l'Epita en SIGL et ma démarche ingénieur j'apporte une expertise technique à des problèmes concrets en prenant en compte tous les enjeux ainsi que la cohérence de tout un système d'information.",
        pictureUrl: ''
    });
    const [loaded, SetLoaded] = useState(false);

    useEffect(() => {
        const fetchInfo = async () => {
            const docRef = doc(firestore, 'app', 'home');
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                let data: any = docSnap.data();
                setHome(data);
                SetLoaded(true);
            }
            else {
                console.warn('Home not found');
                SetLoaded(true)
            }
        }
        fetchInfo();
    }, [loaded])

    const updateChange = () => {
        save('app', home).then(() => console.log('Home updated')).catch(err => console.error(err));
    }

    return (
        <div>
            {loaded ? <Box className={classes.root}>
                <Box className={classes.introductionBox}>
                    <Typography variant='h1'>
                            {home.mainTitle}
                    </Typography>
                    {user?.isAdmin ? <TextField multiline value={home.mainTitle} onChange={(e) => setHome({
                        id: home.id,
                        mainTitle: e.target.value,
                        pictureUrl: home.pictureUrl,
                        textDescriptor: home.textDescriptor
                    })}/> : <></>}
                    <Box className={classes.subBox}>
                        <img className={classes.photo} src={profilPicture} alt='profile-picture'/>
                        {user?.isAdmin ? <IconButton>
                            <CreateIcon/>
                        </IconButton> : <></> }
                        <Typography className={classes.description} variant='h6'>
                            {home.textDescriptor}
                        </Typography>
                        {user?.isAdmin ? <TextareaAutosize className={classes.textArea} value={home.textDescriptor} onChange={(e) => setHome({
                        id: home.id,
                        mainTitle: home.mainTitle,
                        pictureUrl: home.pictureUrl,
                        textDescriptor: e.target.value
                    })}/> : <></>}
                    </Box>
                    {user?.isAdmin ? <Button onClick={updateChange}>Valider</Button> : <></>}
                </Box>
                <HomeBox component={<StudiesList/>} title={'Formations'}/>
                <HomeBox component={<JobsList/>} title={'Expériences professionnelles'}/>
                <HomeBox component={<ProjectsList/>} title={'Projets'}/>
            </Box> : <div style={{minHeight: '50vh', display: "flex", justifyContent: 'center', alignItems: 'center'}}><CircularProgress /></div>}
        </div>
    )
}

export default Home;

