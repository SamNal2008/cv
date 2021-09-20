import { doc } from "@firebase/firestore";
import { Box, Button, CircularProgress, makeStyles, Typography } from "@material-ui/core";
import MDEditor from "@uiw/react-md-editor";
import { getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuthState } from "../components/AuthContext";
import ContentType from "../utils/contentTypes";
import { fetchImage, firestore, save } from "../utils/firebase";
import Job from "../utils/job";
import renovation from '../images/renovation.jpg';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '80vh',
        width: '100%',
        flexGrow: 1,
        paddingTop: '2%'
    },
    main: {
        minHeight: '60vh',
        minWidth: '60vw'
    },
    editor: {
        minHeight: '80vh',
        minWidth: '80vw',
    },
    displayer: {
        padding: '2%',
        minHeight: '80vh',
        minWidth: '80vw',
        margin: '1%',
    },
    displayContent : {
        minWidth: '70vw',
        minHeight: '70vh',
    }
});

const defaultJob = {
    description: 'description',
    id: 'id',
    company: 'Company',
    finishedDate: '',
    jobName: 'test',
    logo: '',
    place: '',
    startedDate: '',
    websiteUrl: ''
};

const JobView = () => {
    const query = useQuery();
    const jobId = query.get('jobId');
    const history = useHistory();
    const classes = useStyles();

    const { user } = useAuthState();

    const [job, setJob] = useState<Job>();
    const [loaded, setLoaded] = useState(false);
    const [picture, setPicture] = useState('');

    const fetchJobInfo = async (jobId: string) => {
        if (jobId === 'id') {
            console.log('oui')
            setJob(defaultJob);
        }
        const docRef = doc(firestore, ContentType.job, jobId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let data: any = docSnap.data();
            if (!data.content) {
                data.content = '# Fill me'
            }
            setJob(data);
        }
        else {
            console.log('Project not found');
            history.push('/');
        }
    }

    const updateContent = () => {
        save(ContentType.job, job);
        console.log('Job updated')
    }
      
    const loadImg = async () => {
        let imgUrl = await fetchImage(`${ContentType.job}/${jobId}`);
        if (imgUrl)
          setPicture(imgUrl);
        else {
          setPicture(renovation);
        }
        setLoaded(true);
    }

    useEffect(() => {
        if (!loaded) {

            if (jobId && !job) {
                fetchJobInfo(jobId).then(() => {
                    loadImg().then(() =>  setLoaded(true))
                });
            }
            else
            {
                setJob(defaultJob)
            }
            setLoaded(true);
        }
    }, [loaded]);
    
    return (
       <Box className={classes.root} onMouseEnter={() => console.log(jobId)}>
            {
                !job || !loaded ? <CircularProgress /> :
                <>
                    <div style={{display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <Typography variant='h2'>
                            {job?.jobName}
                        </Typography>
                        <img height={'50%'} width={'50%'} alt={job?.jobName} src={picture}/>
                    </div>
                    {user?.isAdmin ? <><MDEditor
                        className={classes.editor}
                        value={job.content}
                        onChange={(e) => setJob({
                            description: job.description,
                            id: job.id,
                            content: e,
                            jobName: job.jobName,
                            company: job.company,
                            finishedDate: job.finishedDate,
                            logo: job.logo,
                            place: job.place,
                            startedDate: job.startedDate,
                            websiteUrl: job.websiteUrl
                        })}
                      /><Button onClick={updateContent}>Valider</Button></> :  <div className={classes.displayer}><MDEditor.Markdown className={classes.displayContent} source={job.content} /></div>
                    }
                </>   
            }
        </Box>
    )
}

export default JobView;