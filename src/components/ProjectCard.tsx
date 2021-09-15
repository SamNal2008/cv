import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { Project } from "../utils/project";
import renovation from '../images/renovation.jpg';
import { useHistory } from "react-router-dom";
import ButtonLink from "./custom-material/Links/ButtonLink";
import { useAuthState } from "./AuthContext";
import { deleteDoc, doc } from "@firebase/firestore";
import { deleteImage, deleteObj, fetchImage, firestore } from "../utils/firebase";
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import ContentType from "../utils/contentTypes";

const useStyles = makeStyles({
  main: {
    padding: '1%',
  },
  root: {
    height: '400px',
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  media: {
    height: '10rem',
  },
});

export default function ProjectCard({...project}: Project) {
    const classes = useStyles();
    const history = useHistory();
    const {user} = useAuthState();
    const [loaded, setLoaded] = useState(false);
    const deleteFormation = async () => {
      deleteObj(ContentType.projects, project);
      deleteImage(`${ContentType.projects}/${project.id}`);
      window.location.reload();
    }

    const [picture, setPicture] = useState('');

    useEffect(() => {
      const loadImg = async () => {
        let imgUrl = await fetchImage(`${ContentType.projects}/${project.id}`);
        if (imgUrl)
          setPicture(imgUrl);
        else {
          setPicture(renovation);
        }
        setLoaded(true);
      }
      loadImg();
    }, [loaded])

    return (
      <Box className={classes.main}>
        <Card className={classes.root}>
          <CardActionArea onClick={() => history.push(`/cv/project?projectId=${project.id}`)}>
            <CardMedia
              className={classes.media}
              image={picture}
              title={project.title}
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{marginTop: 'auto'}}>
            <ButtonLink disabled={!project.githubLink} color='primary' content='Git' icon={<></>} path={project.githubLink}/>
            <ButtonLink color='primary' content='En savoir plus' icon={<></>} path={`/cv/project?projectId=${project.id}`} />
            {user?.isAdmin ? <Button color='secondary' startIcon={<DeleteIcon/>} onClick={() => deleteFormation()}>Supprimer</Button> : <></>}
          </CardActions>
        </Card>
        
      </Box>
    );
  }

