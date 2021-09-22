import { doc, getDoc } from "@firebase/firestore";
import { makeStyles } from "@material-ui/core";
import { Divider, CircularProgress, Box, Typography} from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthState } from "../components/AuthContext";
import AboutContent, { defaultAbout, HardSkillCategory, InterestCategory, MethodCategory, SoftSkillCategory } from "../utils/about";
import { firestore, save } from "../utils/firebase";
import LittleChipset from "../components/custom-material/LittleChipset";
import AboutSkills from "../components/AboutSkills";
import AboutTravel from "../components/AboutTravel";
import AboutFun from "../components/AboutFun";
import AboutSport from "../components/AboutSports";
import AboutMe from "../components/AboutMe";


const useStyles = makeStyles({
    root: {
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '3%',
        flexDirection: 'column',
        paddingBottom: '5%'
    },
    main: {
        display: 'flex',
        paddingTop: '2%',
        flexDirection: 'column',
        width: '80%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    introduction: {
    },
    subBox: {
        paddingTop: '2%',
        paddingBottom: '3%',
        width: '100%'
    },
    loisirs: {
        marginBottom: '10%'
    },
    interest: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: '5%',
        flex: '1 1'
    },
})

const About = () => {
    const classes = useStyles();
    const [about, setAbout] = useState<AboutContent>(defaultAbout);
    const [loaded, setLoaded] = useState(false);
    const { user } = useAuthState();
    const [dense, setDense] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const updateChange = () => {
        save('app', about).then(() => console.log('About updated')).catch(err => 'Could not save about page to backend');
    }

    useEffect(() => {
        const fetchInfo = async () => {
            const docRef = doc(firestore, 'app', defaultAbout.id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                let data: any = docSnap.data();
                console.log('Fetch from firebase');
                setAbout(data);
                setLoaded(true);
            }
            else {
                console.warn('About not found');
                setLoaded(true)
            }
        }
        fetchInfo();
    }, [loaded]);

    return (
        <Box className={classes.root}>
           <Typography variant='h2'>
               Qui suis-je ?
           </Typography>
           {
               loaded ?
               <Box className={classes.main}>
                <Box className={classes.subBox}>
                    <AboutMe contacts={about?.informations.contacts} introduction={about?.informations.introduction} valeurs={about?.valeurs} quality={about?.quality} />
                </Box>
                <Box className={classes.subBox}>
                    <Typography variant='h4'>Compétences</Typography>
                    <Divider style={{width: '35vw', marginBottom: '1vh', marginTop: '1%'}} />
                    <AboutSkills category={HardSkillCategory} skills={about?.hardSkills} title={'HardSkills'} last={'Qualité'}/>
                    <AboutSkills category={SoftSkillCategory} skills={about?.softSkills} title={'SoftSkills'} last={'Esprit critique'}/>
                    <AboutSkills category={MethodCategory} skills={about?.methods} title={'Méthodes'} last={''}/>
                </Box>
                <Box className={classes.subBox}>
                    <Typography variant='h4'>Langues</Typography>
                    <Divider style={{width: '35vw', marginBottom: '4vh', marginTop: '1%'}} />
                        <Box style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                            {about?.languages?.map(language => <LittleChipset primary={language.name} secondary={language.level} icon={language.icon}/>)}
                        </Box>
                </Box>
                <Box className={classes.subBox}>
                    <Typography variant='h4'>Centres d'intérêts</Typography>
                    <Divider style={{width: '35vw', marginBottom: '1vh', marginTop: '1%'}} />
                    <Box className={classes.interest}>
                        <AboutFun category={InterestCategory} interests={about?.interests} title={'Loisirs'}/>
                        <Divider flexItem={true} orientation='vertical'/>
                        <AboutTravel visitedCountries={about?.visitedCountries}/>
                        <AboutSport sports={about.sports}/>
                    </Box>
                </Box>
            </Box> : <CircularProgress/>
            }
        </Box>
        )
    }

export default About;