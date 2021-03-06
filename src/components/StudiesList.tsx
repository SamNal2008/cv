import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import ContentType from "../utils/contentTypes";
import { get } from "../utils/firebase";
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

    useEffect(() => {
        get(ContentType.studies).then(res => {
            if (res) {
                setStudies(res);
            }
            setLoaded(true);
        }).catch(() => setLoaded(true));
        
    }, [loaded])

    return (<Box className={classes.main}>
        {!loaded ? <CircularProgress/> : 
            <Box className={classes.root}>
                {studies?.sort((a, b) => (new Date(a.finishedDate)).getTime() - (new Date(b.finishedDate).getTime())).map(std => <StudyCard {...std}/>)}
            </Box>
        }
    </Box>)
}

export default StudiesList;