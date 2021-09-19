import { makeStyles, Box } from "@material-ui/core";
import { ListItem, ListItemIcon, ListItemText, SvgIcon, Typography } from '@mui/material';
import { Sport } from "../utils/about";

const useStyles = makeStyles({
    voyage: {
        paddingTop: '2%',
        paddingBottom: '5%',
        display: 'flex',
        width: '25vw',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    subBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

interface AboutSportsProps {
    sports: Sport[]
}

const SportChippset = (sport: Sport) => {
    return (
        <ListItem>
            <ListItemIcon>
                <SvgIcon color='primary' component={sport.icon}/>
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary={sport.name} secondary={sport.content} />
        </ListItem>
    )
}

const AboutSport = ({...props}: AboutSportsProps) => {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant='h5' sx={{fontWeight: 'bold'}}>Sport</Typography>
            <Box className={classes.voyage}>
                <Box className={classes.subBox}>
                    <Typography variant='h6' color='textPrimary' sx={{textDecoration: 'underline'}}>Collectif</Typography>
                    {props.sports?.filter((sport) => sport.category === 'Collectif').map((sport) => <SportChippset {...sport}/>)}
                </Box>
                <Box className={classes.subBox}>
                    <Typography variant='h6' color='textPrimary' sx={{textDecoration: 'underline'}}>Individuel</Typography>
                    {props.sports?.filter((sport) => sport.category === 'Individuel').map((sport) => <SportChippset {...sport}/>)}
                </Box>
            </Box>
        </Box>
    )
}

export default AboutSport;