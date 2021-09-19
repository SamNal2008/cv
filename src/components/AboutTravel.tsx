import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@mui/material';
import { VisitedCountry } from '../utils/about';
import LittleChipset from './custom-material/LittleChipset';

const useStyles = makeStyles({
    voyage: {
        paddingTop: '2%',
        paddingBottom: '5%',
        display: 'flex',
        width: '30vw',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
});

interface AboutTravelProps {
    visitedCountries: VisitedCountry[]
} 

const AboutTravel = ({...props}: AboutTravelProps) => {

    const classes = useStyles();

    return (
        <Box>
            <Typography variant='h5' sx={{fontWeight: 'bold'}}>Ouverture culturelle</Typography>
            <Box className={classes.voyage}>
                <Box>
                    <Typography variant='h6' color='textPrimary' sx={{textDecoration: 'underline'}}>Pays où j'ai pu vivre</Typography>
                    {props.visitedCountries?.filter((country: VisitedCountry ) => country.livedThere).map((country: VisitedCountry) => <LittleChipset primary={country.country} secondary={`${country.city} | ${country.timeStayed}`} icon={country.flag}/>)}
                </Box>
                <Box>
                    <Typography variant='h6' color='textPrimary' sx={{textDecoration: 'underline'}}>Pays que j'ai pu visiter</Typography>
                    {props.visitedCountries?.filter((country: VisitedCountry) => !country.livedThere).map((country: VisitedCountry) => <LittleChipset primary={country.country} secondary={country.city} icon={country.flag}/>)}
                </Box>
            </Box>
        </Box>
    )
}

export default AboutTravel;