import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, makeStyles, Paper, Typography } from "@material-ui/core";
import Study from "../utils/study";
import WorkIcon from '@material-ui/icons/Work';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        width: '100%',
      },
      media: {
        height: 140,
      },
});

const StudyCard = ( study: Study ) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={study.logo}
                title="Project image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {study.schoolName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {study.description}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" style={{backgroundColor: ''}} color='primary'>
                En savoir plus
            </Button>
            </CardActions>
        </Card>
    )
}

export default StudyCard;