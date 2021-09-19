import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import Study from "../utils/study";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteImage, deleteObj, fetchImage } from "../utils/firebase";
import renovation from '../images/renovation.jpg';
import ContentType from "../utils/contentTypes";
import { useAuthState } from "./AuthContext";
import CircularProgress from '@mui/material/CircularProgress';
import { Divider } from "@mui/material";
 

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

const StudyCard = ( study: Study ) => {
    const classes = useStyles();
    const history = useHistory();
    const { user } = useAuthState();
    const [logo, setLogo] = useState('');
    const [loaded, setLoaded] = useState(false);

    const deleteStudy = async () => {
        deleteImage(`${ContentType.studies}/${study.id}`);
        await deleteObj(ContentType.studies, study);
        window.location.reload();
    }

    useEffect(() => {
        const loadImg = async () => {
          let imgUrl = await fetchImage(`${ContentType.studies}/${study.id}`);
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
            {user?.isAdmin ? <Button onClick={deleteStudy}>Supprimer</Button> : <></>}
            
                <Paper className={classes.main} elevation={5} >
                    <Link style={{textDecoration: 'none'}} to={`/study?studyId=${study.id}`}>
                    <Box>
                        <Typography variant='h4'>
                            {study.schoolName}
                        </Typography>
                        <Divider style={{marginTop: '10px', marginBottom: '10px', width: `${study.schoolName.length}rem`}}/>
                        <Typography variant='subtitle2'>
                            {study.place}
                        </Typography>
                        <Divider style={{marginTop: '10px', marginBottom: '10px', width: `${study.place.length}%`}}/>
                        <Typography style={{whiteSpace: 'pre-line', overflow: 'auto'}}>
                            {study.description}
                        </Typography>
                        <br/>
                        <Typography>
                            {study.startedDate} - {study.finishedDate}
                        </Typography>
                    </Box>
                    </Link>
                    <a href={study.websiteUrl} style={{marginLeft: 'auto'}}> <img height={'100'} style={{marginLeft: 'auto'}} src={logo}/></a>
                </Paper>

        </Box>
    )
}

export default StudyCard;
