import { AppBar, Box, Button, makeStyles, Tab, Tabs, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { signInWithFaceboook, signInWithGitHub, signInWithGoogle } from "../utils/firebase";
import GitHubIcon from '@material-ui/icons/GitHub';
import { Theme } from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import { isValidEmail } from "../utils/functions";
import LockIcon from '@material-ui/icons/Lock';
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}
  
function a11yProps(index: any) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}
  
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        paddingBottom: '10%'
    },
    subDiv: {
        paddingBottom: '5%'
    }
}));
  
function ScrollableTabsButtonForce() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    
    const validEmail = () => {
        if (email.length === 0 && password.length === 0) {
            return true;
        }
        if (email.length > 0 && password.length === 0) {
            return true;
        }
        return (email.length > 0 && password.length > 0 && isValidEmail(email));
    }

    return (
        <div className={classes.root}>
            <Tabs
                style={{width: '100%'}}
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
                >
                <Tab label="Email" icon={<MailIcon />} {...a11yProps(0)} />
                <Tab label="Git" icon={<GitHubIcon />} {...a11yProps(1)} />
                <Tab label="Google" icon={<GTranslateIcon />} {...a11yProps(2)} />
                <Tab label="Facebook" icon={<FacebookIcon />} {...a11yProps(3)} />
                <Tab label="Twitter" icon={<TwitterIcon />} {...a11yProps(4)} />
                <Tab label="Microsoft" icon={<DesktopWindowsIcon />} {...a11yProps(5)} />
                </Tabs>
            <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%'}}>
                <TabPanel value={value} index={0}>
                    <Box style={{display: 'flex', justifyContent: 'space-between', alignItems:'space-between', flexDirection:'column', height: '15vh', paddingTop: '10%', paddingBottom: '10%'}}>
                        <TextField error={!validEmail()} helperText={!validEmail() ? 'Merci de rentrer une adresse valide' : ''} variant='outlined' label='Adresse mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <TextField variant='outlined' type='password' label='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Box>
                    <Button variant='outlined' startIcon={<LockIcon/>}>Se connecter</Button>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Button variant='outlined' startIcon={<GitHubIcon/>} onClick={() => signInWithGitHub()}>Git</Button>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Button variant='outlined' onClick={() => signInWithGoogle()} startIcon={<GTranslateIcon/>}>Google</Button>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Button variant='outlined' onClick={() => signInWithFaceboook()} startIcon={<FacebookIcon/>}>Facebook</Button>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Button variant='outlined' startIcon={<TwitterIcon/>}>Twitter</Button>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Button variant='outlined' startIcon={<DesktopWindowsIcon/>}>Microsoft</Button>
                </TabPanel>
            </Box>
        </div>
    );
}

const Login = () => {

    const classes = useStyles();
    return (<Box className={classes.main}>
        <Typography className={classes.title} variant='h2'>
            Connexion
        </Typography>
        <Typography className={classes.subDiv} variant='h3'>
            Veuillez choisir un moyen de connexion
        </Typography>
        <ScrollableTabsButtonForce/>
    </Box>)
}

export default Login;