import { Box, makeStyles, Typography } from "@material-ui/core";
import renovationImg from '../images/renovation.jpg';

const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${renovationImg})`,
        width: '100vw',
        height: '100vh'
    }
})

const InProgress = () => {
    document.title = 'En cours ...';
    const classes = useStyles();
    return (
        <Box className={classes.root}>
           <Typography variant='h3'>
               Cette page est en cours de developpement
            </Typography>
        </Box>
    )
}

export default InProgress;