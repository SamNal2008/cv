import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Divider, List, ListItemIcon, ListItem, ListItemText, SvgIcon, Box, Button } from "@mui/material"
import { Link } from "react-router-dom";
import { Contact, Quality } from "../utils/about";
import { Downloading } from "@mui/icons-material";

interface AboutMeProps {
    contacts: Contact[],
    introduction: string,
    quality: Quality[],
    valeurs: Quality[]
}

const useStyles = makeStyles({
    list: {
        overflow: 'hidden'
    },
    qualitiesAndValues: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        paddingTop: '7%',
        paddingRight: '3%',
        flexWrap: 'wrap',
    },
    qualities: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
});

const AboutMeChipset = ({primary, icon, secondary}: {primary: string, icon: any, secondary?: string}) => {
    return (
        <ListItem>
            <ListItemIcon>
                <SvgIcon color='primary' component={icon}/>
            </ListItemIcon>
            {!secondary || !secondary.startsWith('Télécharger') ? 
            <ListItemText id="switch-list-label-wifi" primary={primary} secondary={secondary ? secondary?.startsWith('http') ? <a target='_blank' href={secondary}>{secondary}</a> : `${secondary}` : ''} /> 
            : 
            <ListItemText id="switch-list-label-wifi" primary={primary} secondary={<a target='_blank' href={'https://firebasestorage.googleapis.com/v0/b/cv-backend-aff36.appspot.com/o/others%2Fnalbandian-cv.pdf?alt=media'} download>{secondary}</a>} />}
        </ListItem>
    )
}

const AboutMe = (props: AboutMeProps) => {
    const dense = false;
    const classes = useStyles();

    return ( <Grid container 
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={2} sm={4} md={6}>
                        <Typography variant='h4'>Personnalité</Typography>
                        <Divider style={{marginTop: '1%'}} />
                        {/*<Typography>{props.introduction}</Typography>*/}
                        <Box className={classes.qualitiesAndValues}>
                            <Box className={classes.qualities}>
                                <Typography variant='h6'>Qualités</Typography>
                                {props.quality.map(quality => <AboutMeChipset primary={quality.name} icon={quality.icon}/>)}
                            </Box>
                            <Box className={classes.qualities}>
                                <Typography variant='h6'>Valeurs</Typography>
                                {props.valeurs.map(valeurs => <AboutMeChipset primary={valeurs.name} icon={valeurs.icon}/>)}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6}>
                        <Box display='flex' justifyContent='flex-end' alignItems='flex-end' flexDirection='column' overflow='auto'>
                            <Typography align='right' variant='h4'>Contact</Typography>
                            <Divider flexItem={true} textAlign='right' style={{ marginBottom: '4vh', marginTop: '1%'}} />
                            {props.contacts.map(contact => <AboutMeChipset primary={contact.name} icon={contact.icon} secondary={contact.content}/>)}
                        </Box>
                    </Grid>
                </Grid>
    )
}

export default AboutMe;