import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Input, InputLabel, MenuItem, Select, TextField, Typography, useMediaQuery} from "@material-ui/core";
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useState } from "react";
import { primaryMainColor } from "../utils/theme";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { createNewProject } from "../utils/firebase";
import { Project } from "../utils/project";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    root: {
        backgroundColor: 'white',
        minHeight: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '30%'
    },
    main: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        height: '100%',
        paddingTop: '3%',
        justifyContent: 'flex-start',
        gap: '2vh'
    },
    submitButton: {
        backgroundColor: primaryMainColor,
        height: '100%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const NewProjectForm = ({...props}: any) => {

    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectType, setProjectType] = useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setProjectType(event.target.value as string);
        console.log(projectType);
      };

    const classes = useStyles();

    const validateForm = (e: any) => {
        e.preventDefault();
        console.log(projectName);
        let newProject: Project = {
            description: projectDescription,
            id: projectName,
            title: projectName,
            type: 'personal'
        }
        createNewProject(newProject);
        props.handleValidate();
    }

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Créer une nouvelle formation"}</DialogTitle>
                <DialogContent style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
                    <TextField
                        variant='outlined'
                        required
                        onChange={(e) => setProjectName(e.target.value)}
                        label='Nom du projet'
                        value={projectName}/>
                    <TextareaAutosize style={{maxWidth: '30vw', maxHeight: '60vh'}} value={projectDescription} onChange={e => setProjectDescription(e.target.value)}/>
                    <Input type='file'/>

                </DialogContent>
                <DialogActions>
                <Button style={{backgroundColor: primaryMainColor, color: 'white'}} autoFocus onClick={props.handleClose} color="primary">
                    Annuler
                </Button>
                <Button style={{backgroundColor: primaryMainColor, color: 'white'}} onClick={validateForm} color="primary" autoFocus>
                    Valider
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default NewProjectForm;