import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { Project } from "../utils/project";

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '1%'
    },
    media: {
      height: 140,
    },
});

export default function ProjectCard({...project}: Project) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`/static/images/projects/${project.id}/img.jpg`}
            title="Project image"
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
          <Button size="small" color="primary">
            Partager
          </Button>
          <Button size="small" color="primary">
            En savoir plus
          </Button>
        </CardActions>
      </Card>
    );
  }

