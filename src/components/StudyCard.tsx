import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, makeStyles, Paper, Typography } from "@material-ui/core";
import Study from "../utils/study";
import WorkIcon from '@material-ui/icons/Work';
import { openInNewTab } from "../utils/functions";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchImage } from "../utils/firebase";
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
    }
});

const StudyCard = ( study: Study ) => {
    const classes = useStyles();
    const history = useHistory();
    const [logo, setLogo] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const loadImg = async () => {
          let imgUrl = await fetchImage(`studies/${study.id}`);
          if (imgUrl)
            setLogo(imgUrl);
          else {
            setLogo(renovation);
          }
          setLoaded(true);
        }
        loadImg();
      }, [loaded])

    return (
        <Box className={classes.root}>
            <a style={{textDecoration: 'none'}} href={study.websiteUrl} target='_blank'>
                <Paper className={classes.main} elevation={5} >
                    <Box>
                        <Typography variant='h4'>
                            {study.schoolName}
                        </Typography>
                        ----
                        <Typography variant='subtitle2'>
                            {study.place}
                        </Typography>
                        ----
                        <Typography>
                            {study.description}
                        </Typography>
                        <Typography>
                            {study.startedDate} - {study.finishedDate}
                        </Typography>
                    </Box>
                    <img style={{marginLeft: 'auto'}} height={'100'} src={logo}/>
                </Paper>
            </a>
        </Box>
    )
}

export default StudyCard;