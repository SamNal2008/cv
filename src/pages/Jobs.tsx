import { query } from "@firebase/firestore";
import { Box, Button, Collapse, makeStyles, Typography } from "@material-ui/core";
import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "../components/AuthContext";
import JobCard from "../components/JobCard";
import NewJobForm from "../components/NewJobForm";
import NewStudyForm from "../components/NewStudyForm";
import StudyCard from "../components/StudyCard";
import ContentType from "../utils/contentTypes";
import { get } from "../utils/firebase";
import Job from "../utils/job";
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
        width: '90%',
        paddingBottom: '10%'
      }
  }));

const Jobs = (): JSX.Element => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    const { user } = useAuthState();

    document.title = 'Expériences professionnelles';

    useEffect(() => {
        get(ContentType.job).then(res => {
          console.log(res);
          if (res)
            setJobs(res);
          setLoaded(true);
        });
    }, [loaded])

    return (
        <Box className={classes.root}>
          <Box style={{paddingBottom: '2%'}}>
            <Typography variant="h2">
              Expériences professionnelles
            </Typography>
          </Box>
          <Box className={classes.formationsBox}>
            {jobs?.sort((a, b) => (new Date(a.finishedDate)).getTime() - (new Date(b.finishedDate).getTime())).map(tmp => <JobCard {...tmp}/>)}
          </Box>
          {user?.isAdmin ? <Button onClick={() => setOpen(!open)}>Ajouter une nouvelle expérience</Button> : <></>}
            <Collapse in={open} style={{height: '100%'}}>
                <NewJobForm open={open} handleValidate={() => {setOpen(!open); setLoaded(false);}} handleClose={() => setOpen(!open)}/>
            </Collapse>
        </Box>
    )
}

export default Jobs;
