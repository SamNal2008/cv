import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { Project } from "../utils/project";
import renovation from '../images/renovation.jpg';
import { useHistory } from "react-router-dom";
import ButtonLink from "./custom-material/Links/ButtonLink";

const useStyles = makeStyles({
  main: {
    padding: '1%',
    
  },
  root: {
    maxWidth: 345,
    width: 345
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard({...project}: Project) {
    const classes = useStyles();
    const history = useHistory();
    return (
      <Box className={classes.main}>
        <Card className={classes.root}>
          <CardActionArea onClick={() => history.push(`/project?projectId=${project.id}`)}>
            <CardMedia
              className={classes.media}
              image={renovation}
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
          <CardActions>
            <ButtonLink color='primary' content='Git' icon={<></>} path='https://www.github.com'/>
            <ButtonLink color='primary' content='En savoir plus' icon={<></>} path={`/project?projectId=${project.id}`} />
          </CardActions>
        </Card>
      </Box>
    );
  }

