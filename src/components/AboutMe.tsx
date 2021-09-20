import { makeStyles } from "@material-ui/core";
import { SmsFailed } from "@material-ui/icons";
import { Grid, Typography, Divider, List, ListItemIcon, ListItem, ListItemText, SvgIcon, Box } from "@mui/material"
import { Contact, Quality } from "../utils/about";
import LittleChipset from "./custom-material/LittleChipset";

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
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: '2%',
        paddingRight: '3%',
        flexWrap: 'wrap'
    },
    qualities: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
            <ListItemText id="switch-list-label-wifi" primary={primary} secondary={secondary ? secondary?.startsWith('http') ? <a target='_blank' href={secondary}>{secondary}</a> : `${secondary}` : ''} />
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
                        <Typography variant='h4'>Introduction</Typography>
                        <Divider style={{width: '35vw', marginBottom: '4vh', marginTop: '1%'}} />
                        <Typography>{props.introduction}</Typography>
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