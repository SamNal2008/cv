import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '3%',
        flexDirection: 'column'
    },
    presentation: {
        display: 'flex',
        paddingTop: '1%',
        flexDirection: 'column',
        backgroundColor: 'yellow',
        width: '80%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
           <Typography variant='h2'>
               A propos de moi
           </Typography>
            <Box className={classes.presentation}>Oui</Box>
        </Box>
    )
}

export default About;