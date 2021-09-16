import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ContentType from "../utils/contentTypes";
import { deleteImage, deleteObj, fetchImage } from "../utils/firebase";
import Job from "../utils/job";
import renovation from '../images/renovation.jpg';
import { useAuthState } from "./AuthContext";

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '80%',
        padding: '1%',
    },
    main: {
        height: '100%',

        padding: '1%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 1,
        overflow: 'hidden'
    }
});

const JobCard = ( job: Job ) => {
    const classes = useStyles();
    const history = useHistory();
    const [logo, setLogo] = useState('');
    const [loaded, setLoaded] = useState(false);
    const { user } = useAuthState();

    const deleteJob = async () => {
        deleteImage(`${ContentType.job}/${job.id}`);
        await deleteObj(ContentType.job, job);
        window.location.reload();
    }

    useEffect(() => {
        const loadImg = async () => {
          let imgUrl = await fetchImage(`${ContentType.job}/${job.jobName}`);
          if (imgUrl)
            setLogo(imgUrl);
          setLoaded(true);
        }
        loadImg();
      }, [loaded]);

    return (
        <Box className={classes.root}>
            {user?.isAdmin ? <Button onClick={deleteJob}>Supprimer</Button> : <></>}
            <Link style={{textDecoration: 'none'}} to={`/cv/job?jobId=${job.jobName}`}>
                <Paper className={classes.main} elevation={5} >
                    <img  height={'100'} style={{marginRight: '10%'}} src={logo}/>
                    <Box>
                        <Typography variant='h4'>
                            {job.jobName}
                        </Typography>
                        ----
                        <Typography variant='subtitle2'>
                            {job.place}
                        </Typography>
                        ----
                        <Typography>
                            <pre style={{ fontFamily: 'inherit' }}>
                                {job.description}
                            </pre>
                        </Typography>
                        <Typography>
                            {job.startedDate} - {job.finishedDate}
                        </Typography>
                    </Box>
                </Paper>
            </Link>
        </Box>
    )
}

export default JobCard;