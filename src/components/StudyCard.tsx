import { makeStyles, Paper, Typography } from "@material-ui/core";
import Study from "../utils/study";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '350px',
        height: '200px',
        padding: '1%',
    }
});

const StudyCard = ( study: Study) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={3} variant='elevation'>
            <Typography variant='h4'>
                {study.schoolName}
            </Typography>
            <Typography variant="subtitle2">
                {study.diploma} - {(study.startedDate.getFullYear() - study.finishedDate.getFullYear()).toString()} ans - {study.place}
            </Typography>
            <Typography>
                {study.description}
            </Typography>
        </Paper>
    )
}

export default StudyCard;