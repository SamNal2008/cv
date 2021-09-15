import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ContentType from "../utils/contentTypes";
import { fetchImage } from "../utils/firebase";
import Job from "../utils/job";
import renovation from '../images/renovation.jpg';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        padding: '1%',
    },
    main: {
        height: '100%',
        width: '100%',
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

    useEffect(() => {
        const loadImg = async () => {
          let imgUrl = await fetchImage(`${ContentType.job}/${job.id}`);
          if (imgUrl)
            setLogo(imgUrl);
          else {
            setLogo(renovation);
          }
          setLoaded(true);
        }
        loadImg();
      }, [loaded]);

    return (
        <Box className={classes.root}>
            <Link style={{textDecoration: 'none'}} to={`/cv/job?jobId=${job.id}`}>
                <Paper className={classes.main} elevation={5} >
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
                    <img  height={'100'} style={{marginLeft: 'auto'}} src={logo}/>
                </Paper>
            </Link>
        </Box>
    )
}

export default JobCard;