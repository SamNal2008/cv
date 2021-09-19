import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import { Project } from "../utils/project";
import renovation from '../images/renovation.jpg';
import { useHistory } from "react-router-dom";
import ButtonLink from "./custom-material/Links/ButtonLink";
import { useAuthState } from "./AuthContext";
import { deleteDoc, doc } from "@firebase/firestore";
import { deleteImage, deleteObj, fetchImage, firestore, save } from "../utils/firebase";
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import ContentType from "../utils/contentTypes";
import PushPinIcon from '@mui/icons-material/PushPin';

const useStyles = makeStyles({
  main: {
    padding: '1%',
  },
  root: {
    height: '410px',
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  media: {
    height: '180px',
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
    marginTop: 'auto'
  }
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

    let projectIsPinned = false;
    if (project.isPinned) {
      projectIsPinned = true;
    }
    const [isPin, setIsPin] = useState<boolean>(projectIsPinned);

    const [picture, setPicture] = useState('');

    const updateProject = (isPinned: boolean) => {
      let newProject: Project = {
        ...project,
        isPinned
      }
      save(ContentType.projects, newProject);
    }

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
          <CardActionArea onClick={() => history.push(`/project?projectId=${project.id}`)}>
            <CardMedia
              className={classes.media}
              image={picture}
              title={project.title}
              />
            <CardContent style={{height: '140px'}}>
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" style={{height: '100px', whiteSpace: 'pre-line', overflow: 'auto'}}>
                  {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.action}>
            <ButtonLink disabled={!project.githubLink} inMenu={true} content='Git' icon={<></>} path={project.githubLink}/>
            <ButtonLink color='primary' inMenu={true} content='En savoir plus' icon={<></>} path={`/project?projectId=${project.id}`} />
            {user?.isAdmin ?
              <>
              <Button color='secondary' startIcon={<DeleteIcon/>} onClick={() => deleteFormation()}>Supprimer</Button>
              {isPin ? <IconButton onClick={() => {setIsPin(false); updateProject(false);}} color="primary" aria-label="pin a project">
                <PushPinIcon />
              </IconButton> : <IconButton onClick={() => {setIsPin(true); updateProject(true);}} color="secondary" aria-label="pin a project">
                <PushPinIcon />
              </IconButton>}
              </>
              : 
              <></>}
          </CardActions>
        </Card>
      </Box>
    );
  }

