import { Button, Card, makeStyles, withStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        backgroundColor: 'blue'
    }
});

const StudyCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            OK
        </Card>
    )
}

export default StudyCard;