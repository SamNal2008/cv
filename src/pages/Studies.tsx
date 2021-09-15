import { query } from "@firebase/firestore";
import { Box, Button, Collapse, makeStyles, Typography } from "@material-ui/core";
import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "../components/AuthContext";
import NewStudyForm from "../components/NewStudyForm";
import StudyCard from "../components/StudyCard";
import ContentType from "../utils/contentTypes";
import { get } from "../utils/firebase";
import Study from "../utils/study";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '80vh',
        flexGrow: 1,
        paddingTop: '1%',
        paddingBottom: '1%',
        
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        color: 'white',
      },
      formationsBox: {
        width: '80%',
        paddingBottom: '10%'
      }
  }));

export const createNewFormation = (study: Study) => {
  console.log(study);
}

const Studies = (): JSX.Element => {
    const [studies, setStudies] = useState<Study[]>([]);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const { user } = useAuthState();

    document.title = 'Formations';

    useEffect(() => {
        get(ContentType.projects).then(res => {
          console.log(res);
          if (res)
            setStudies(res);
          setLoaded(true);
        });
    }, [loaded])

    return (
        <Box className={classes.root}>
          <Box style={{paddingBottom: '2%'}}>
            <Typography variant="h2">
              Formations
            </Typography>
          </Box>
          <Box className={classes.formationsBox}>
            {studies?.sort((a, b) => (new Date(a.finishedDate)).getTime() - (new Date(b.finishedDate).getTime())).map(std => <StudyCard {...std}/>)}
          </Box>
          {user?.isAdmin ? <Button onClick={() => setOpen(!open)}>Ajouter une nouvelle formation</Button> : <></>}
            <Collapse in={open} style={{height: '100%'}}>
                <NewStudyForm open={open} handleValidate={() => {setOpen(!open); setLoaded(false);}} handleClose={() => setOpen(!open)}/>
            </Collapse>
        </Box>
    )
}

export default Studies;