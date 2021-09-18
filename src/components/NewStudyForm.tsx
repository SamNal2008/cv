import { Box, Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Input, InputLabel, makeStyles, MenuItem, TextareaAutosize, TextField, Theme, useMediaQuery, useTheme } from "@material-ui/core";
import { useState } from "react";
import ContentType from "../utils/contentTypes";
import { save, uploadImageFor } from "../utils/firebase";
import Study from "../utils/study";
import { primaryMainColor } from "../utils/theme";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dialogContentMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '30px',
        maxHeight: '100%',
        overflow: 'auto'
    },
  }),
);

const NewStudyForm = ({...props}: any) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [websiteUrl, setWebsiteUrl] = useState('');
    const [place, setPlace] = useState('');
    const [diploma, setDiploma] = useState('');
    const [finishedDate, setFinishedDate] = useState('');
    const [startedDate, setStartedDate] = useState('');

    const [tmpPicture, setTmpPicture] = useState();

    const classes = useStyles();

    const validateForm = async (e: any) => {
        e.preventDefault();
        let realImg = await uploadImageFor(ContentType.studies, name, tmpPicture);
        let realStudy: Study = {
            description: description,
            finishedDate: finishedDate,
            id: name,
            logo: `studies/${name}`,
            place: place,
            schoolName: name,
            startedDate: startedDate,
            websiteUrl: websiteUrl,
            content: '${description}'
            diploma: diploma
        };
        save(ContentType.studies, realStudy);
        props.handleValidate();
    }

    const uploadPicture = async (e: any) => {
        if (e.target.files[0]) {
            setTmpPicture(e.target.files[0]);
        }
    }

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
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
                            onChange={(e) => setName(e.target.value)}
                            label="Nom de l'école"
                            value={name}/>
                        <TextareaAutosize style={{width: '25vw', height: '60vh', maxHeight: '60vh', maxWidth: '25vw'}} value={description} onChange={e => setDescription(e.target.value)}/>
                        <Input type='file' onChange={uploadPicture}/>
                        <TextField
                            variant='outlined'
                            onChange={(e) => setWebsiteUrl(e.target.value)}
                            label='Lien site'
                            value={websiteUrl}
                        />
                        <TextField
                            variant='outlined'
                            onChange={(e) => setPlace(e.target.value)}
                            label='Lieu'
                            value={place}
                        />
                        <TextField
                            variant='outlined'
                            onChange={(e) => setDiploma(e.target.value)}
                            label='Diplôme'
                            value={diploma}
                        />
                        <Box>

                            <TextField
                                required
                                id="date"
                                label="Date de début"
                                type="date"
                                defaultValue={startedDate}
                                onChange={(e) => {
                                    let date = new Date(e.target.value);
                                    setStartedDate(date.toLocaleDateString('fr-FR'));
                                }}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                required
                                id="date"
                                label="Date de fin"
                                type="date"
                                defaultValue={finishedDate}
                                onChange={(e) => setFinishedDate((new Date(e.target.value).toLocaleDateString('fr-FR')))}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
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
    )
}

export default NewStudyForm;
