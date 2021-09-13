import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Input, InputLabel, List, MenuItem, Select, TextField, Typography, useMediaQuery} from "@material-ui/core";
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { useState } from "react";
import { primaryMainColor } from "../utils/theme";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { save, uploadImageFor } from "../utils/firebase";
import { Project, ProjectType } from "../utils/project";

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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '80%'
    },
    dialogContentMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '30px',
        maxHeight: '100%',
        overflow: 'auto'
    }
}));

const NewProjectForm = ({...props}: any) => {

    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectType, setProjectType] = useState<ProjectType>(ProjectType.School);
    const [githubLink, setGithubLink] = useState('');
    const [projectPicture, setProjectPicture] = useState();

    const [tmpPicture, setTmpPicture] = useState();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        let tmpProjectType = event.target.value as ProjectType;
        setProjectType(tmpProjectType)
        console.log(projectType);
      };

    const uploadPicture = async (e: any) => {
        if (e.target.files[0]) {
            setTmpPicture(e.target.files[0]);
        }
    }

    const classes = useStyles();

    const validateForm = async (e: any) => {
        e.preventDefault();
        console.log(projectName);
        let realImg = await uploadImageFor('projects', projectName, tmpPicture);
        let newProject: Project = {
            description: projectDescription,
            id: projectName,
            title: projectName,
            type: projectType,
            githubLink: githubLink,
            photoUrl: `projects/${projectName}`
        }
        save('projects', newProject);
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
                <DialogContent className={classes.dialogContentMain}>
                        <TextField
                            variant='outlined'
                            required
                            onChange={(e) => setProjectName(e.target.value)}
                            label='Nom du projet'
                            value={projectName}/>
                        <TextareaAutosize style={{width: '25vw', height: '60vh', maxHeight: '60vh', maxWidth: '25vw'}} value={projectDescription} onChange={e => setProjectDescription(e.target.value)}/>
                        <Input type='file' onChange={uploadPicture}/>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Type de projet</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={projectType}
                            onChange={handleChange}
                            label="Type de projet"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={ProjectType.Personal}>Personnel</MenuItem>
                            <MenuItem value={ProjectType.Professional}>Professionnel</MenuItem>
                            <MenuItem value={ProjectType.School}>Scolaire</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            variant='outlined'
                            onChange={(e) => setGithubLink(e.target.value)}
                            label='Lien git'
                            value={githubLink}/>
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