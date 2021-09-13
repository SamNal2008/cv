import { getFirestore } from "@firebase/firestore";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { firestore } from "../utils/firebase";
import { Project } from "../utils/project";
import CircularProgress from '@material-ui/core/CircularProgress';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        flexGrow: 1,
        paddingTop: '2%'
    },
    homeMainDiv: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
})

const ProjectView = () => {
    const query = useQuery();
    const projectId = query.get('projectId');
    const history = useHistory();
    const [project, setProject] = useState<Project>();
    const classes = useStyles();
    const [mdFile, setMdFile] = useState<any>();
    
    useEffect(() => {
        const fetchProjectInfo = async (projectId: string) => {
            const docRef = doc(firestore, 'projects', projectId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                let data: any = docSnap.data();
                setProject(data);
            }
            else {
                console.log('Project not found');
                history.push('/');
            }
        }
        if (projectId)
            fetchProjectInfo(projectId);
        else 
            history.push('/')
    }, [project]);
    
    useEffect(()=> {
      fetch(AppMarkdown)
          .then((res) => res.text())
          .then((md) => {
              setMdFile({ md })
          })
  }, []);
    return (
       <Box className={classes.root}>
            {
                !project ? <CircularProgress /> :
                
            }
        </Box>
    )
}

export default ProjectView;