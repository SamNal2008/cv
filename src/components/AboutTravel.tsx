import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography, useTheme } from '@mui/material';
import { VisitedCountry } from '../utils/about';
import LittleChipset from './custom-material/LittleChipset';

const useStyles = makeStyles({
    voyage: {
        paddingTop: '2%',
        paddingBottom: '5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flex: '1 1'
    },
});

interface AboutTravelProps {
    visitedCountries: VisitedCountry[]
} 

const AboutTravel = ({...props}: AboutTravelProps) => {

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = !useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box style={{paddingLeft: '5%', paddingRight: '5%'}}>
            <Typography variant='h5' sx={{fontWeight: 'bold'}}>Découverte & Voyage</Typography>
            <Box className={classes.voyage}>
                <Box flex={'1 1 300px'}>
                    <Typography variant='h6' color='textPrimary' sx={{textDecoration: 'underline'}}>Découverte</Typography>
                    {props.visitedCountries?.filter((country: VisitedCountry ) => country.livedThere).map((country: VisitedCountry) => <LittleChipset primary={country.country} secondary={`${country.city} | ${country.timeStayed}`} icon={country.flag}/>)}
                </Box>
                <Box flex={'1 1 300px'}>
                    <Typography variant='h6' color='textPrimary' sx={{textDecoration: 'underline'}}>Voyage</Typography>
                    <Box style={{overflow: 'auto', minWidth: '70px', maxHeight: '420px'}}>
                        {props.visitedCountries?.filter((country: VisitedCountry) => !country.livedThere).map((country: VisitedCountry) => <LittleChipset primary={country.country} secondary={country.city} icon={country.flag}/>)}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutTravel;