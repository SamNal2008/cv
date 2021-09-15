import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import ContentType from "../utils/contentTypes";
import { get } from "../utils/firebase";
import Job from "../utils/job";
import JobCard from "./JobCard";
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

const JobsList = () => {
    const [jobs, setJobs] = useState<Job[]>();
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        get(ContentType.job).then(res => {
            if (res) {
                setJobs(res);
            }
            setLoaded(true);
        }).catch(() => setLoaded(true));
        
    }, [loaded])

    return (<Box className={classes.main}>
        {!loaded ? <CircularProgress/> : 
            <Box className={classes.root}>
                {jobs?.sort((a, b) => (new Date(a.finishedDate)).getTime() - (new Date(b.finishedDate).getTime())).map(job => <JobCard {...job}/>)}
            </Box>
        }
    </Box>)
}

export default JobsList;