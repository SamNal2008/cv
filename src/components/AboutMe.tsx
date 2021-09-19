import { Grid, Typography, Divider, List, ListItemIcon, ListItem, ListItemText, SvgIcon } from "@mui/material"
import { Contact } from "../utils/about";

interface AboutMeProps {
    contacts: Contact[],
    introduction: string
}

const AboutMe = (props: AboutMeProps) => {
    const dense = false;
    return ( <Grid container 
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start" spacing={9}
                >
                    <Grid item xs={4}>
                        <Typography variant='h4'>Introduction</Typography>
                        <Divider style={{width: '35vw', marginBottom: '4vh', marginTop: '1%'}} />
                        <Typography>{props.introduction}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align='right' variant='h4'>Contact</Typography>
                        <Divider textAlign='right' style={{ marginBottom: '4vh', marginTop: '1%'}} />
                            <List dense={dense}>
                                {
                                    props.contacts.map(contact => <ListItem>
                                        <ListItemIcon>
                                            <SvgIcon color='primary' component={contact.icon}/>
                                        </ListItemIcon>
                                        <ListItemText id="switch-list-label-wifi" primary={contact.name} secondary={contact.content?.startsWith('http') ? <a target='_blank' href={contact.content}>{contact.content}</a> : `${contact.content}`} />
                                    </ListItem>)
                                }
                                
                            </List>
                    </Grid>
                </Grid>
    )
}

export default AboutMe;