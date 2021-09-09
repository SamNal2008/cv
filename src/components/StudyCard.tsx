import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Icon, makeStyles, Paper, Typography } from "@material-ui/core";
import Study from "../utils/study";
import WorkIcon from '@material-ui/icons/Work';
import { openInNewTab } from "../utils/functions";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

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
    return (
        <Box className={classes.root}>
            <Link style={{textDecoration: 'none'}} to={`/study/view?studyId=${study.id}`} >
                <Paper className={classes.main} elevation={5} >
                    <Box>
                        <Typography variant='h5'>
                            {study.schoolName}
                        </Typography>
                        <Typography>
                            {study.description}
                        </Typography>
                    </Box>
                    <img style={{marginLeft: 'auto'}} height={'100'} src={study.logo}/>
                </Paper>
            </Link>
        </Box>
        // <Card className={classes.root}>
        //         <CardActionArea onClick={() => console.log('Study page')}>
        //         <CardMedia
        //             className={classes.media}
        //             image={study.logo}
        //             title={study.schoolName}
        //         />
        //         <CardContent>
        //             <Typography gutterBottom variant="h5" component="h2">
        //                 {study.schoolName}
        //             </Typography>
        //             <Typography variant="body2" color="textSecondary" component="p">
        //                 {study.description}
        //             </Typography>
        //         </CardContent>
        //     </CardActionArea>
        //     <CardActions>
        //     <Link href={study.websiteUrl} target='_blank' style={{backgroundColor: ''}} color='primary'>
        //         Lien vers le site de l'établissement
        //     </Link>
        //     </CardActions>
        // </Card>
    )
}

export default StudyCard;