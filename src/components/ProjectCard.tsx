import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { Project } from "../utils/project";
import renovation from '../images/renovation.jpg';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      width: '23%',
    },
    media: {
      height: 140,
    },
});

export default function ProjectCard({...project}: Project) {
    const classes = useStyles();
    const history = useHistory();
    return (
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
          <Button size="small" style={{backgroundColor: ''}} color='primary'>
            Git
          </Button>
          <Button size="small" style={{backgroundColor: ''}} color='primary'>
            En savoir plus
          </Button>
        </CardActions>
      </Card>
    );
  }

