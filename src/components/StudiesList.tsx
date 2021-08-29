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
            startedDate: new Date()
        };
        let shenyang: Study = {
            description: 'Séjour en Chine',
            diploma: 'Echange universitaire',
            finishedDate: new Date(),
            place: 'Shenyang, Chine',
            schoolName: 'Northeastern University',
            startedDate: new Date()
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