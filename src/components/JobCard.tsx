import { Box, Button, makeStyles, Paper, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ContentType from "../utils/contentTypes";
import { deleteImage, deleteObj, fetchImage } from "../utils/firebase";
import Job from "../utils/job";
import renovation from '../images/renovation.jpg';
import { useAuthState } from "./AuthContext";
import Divider from '@mui/material/Divider';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '98%',
        padding: '1%',
    },
    main: {
        height: '100%',
        padding: '1%',
        display: 'grid',
        gridTemplateColumns: '30% 70%',
        justifyItems: 'center',
        alignItems: 'center'
    },
    mainLittle: {
        height: '100%',
        padding: '1%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        flexShrink: 1,
        overflow: 'hidden',
    },
    divider: {
        paddingTop: '10px',
        paddingBottom: '10px',
    },
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

    const theme = useTheme();
    const fullscreen = !useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <Box className={classes.root}>
            {user?.isAdmin ? <Button onClick={deleteJob}>Supprimer</Button> : <></>}
            <Link style={{textDecoration: 'none'}} to={`/job?jobId=${job.jobName}`}>
                {fullscreen ? <Paper className={classes.main} elevation={5} >
                    <img  height={'100'} src={logo}/>
                    <Box style={{justifySelf: 'start'}}>
                        <Typography variant='h4'>
                            {job.jobName}
                        </Typography>
                        <Divider style={{marginTop: '10px', marginBottom: '10px', width: `${job.jobName.length}rem`}}/>
                        <Typography variant='subtitle2'>
                            {job.place}
                        </Typography>
                        <Divider style={{marginTop: '10px', marginBottom: '10px', width: `${job.place.length}%`}}/>
                        <Typography style={{whiteSpace: 'pre-line', overflow: 'auto'}}>
                            {job.description}
                        </Typography>
                        <br/>
                        <Typography color='textSecondary'>
                            {job.startedDate} - {job.finishedDate}
                        </Typography>
                    </Box>
                </Paper>
                 :
                <Paper className={classes.mainLittle} elevation={5}>
                    <img  height={'100'} style={{marginRight: '10%'}} src={logo}/>
                </Paper>}
            </Link>
        </Box>
    )
}

export default JobCard;
