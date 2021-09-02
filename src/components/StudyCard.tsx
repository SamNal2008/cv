import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, makeStyles, Paper, Typography } from "@material-ui/core";
import Study from "../utils/study";
import WorkIcon from '@material-ui/icons/Work';
import { openInNewTab } from "../utils/functions";

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
                <CardActionArea onClick={() => console.log('Study page')}>
                <CardMedia
                    className={classes.media}
                    image={study.logo}
                    title={study.schoolName}
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
            <Button onClick={() => openInNewTab(study.websiteUrl)} size="small" style={{backgroundColor: ''}} color='primary'>
                Lien vers le site de l'établissement
            </Button>
            </CardActions>
        </Card>
    )
}

export default StudyCard;