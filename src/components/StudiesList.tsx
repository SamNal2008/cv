import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import Study from "../utils/study";
import StudyCard from "./StudyCard";

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%'
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%'
    }
})

const StudiesList = () => {
    const [studies, setStudies] = useState<Study[]>();
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);

    const fetchStudies = () => {
        /* axios.get('/studies').then(res => {
            setStudies(res.data);
        });*/
        let epita: Study = {
            description: 'Ecole sympathique',
            diploma: 'Diplome d\'ingénieur',
            finishedDate: new Date(),
            place: 'Paris, France',
            schoolName: 'EPITA',
            startedDate: new Date(),
            id: '1',
            logo: 'https://www.epita.fr/wp-content/uploads/mt/media/epita_nouveau_logo_identite_visuelle_innovation_ecole_informatique_30ans_01.jpg',
            websiteUrl: 'https://www.epita.fr'
        };
        let shenyang: Study = {
            description: 'Séjour en Chine',
            diploma: 'Echange universitaire',
            finishedDate: new Date(),
            place: 'Shenyang, Chine',
            schoolName: 'Northeastern University',
            startedDate: new Date(),
            id: '2',
            logo: 'https://www.topuniversities.com/sites/default/files/files_live/profiles/logos/northeastern-university-china_592560cf2aeae70239af52ac_large.jpg',
            websiteUrl: 'https://www.google.com'
        };
        return [epita, shenyang];
    }

    useEffect(() => {
        setStudies(fetchStudies());
        setLoaded(true);
    }, [loaded])

    return (<Box className={classes.main}>
        {!loaded ? <CircularProgress/> : 
            <Box className={classes.root}>
                {studies?.map(std => <StudyCard {...std}/>)}
            </Box>
        }
    </Box>)
}

export default StudiesList;