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
        flexGrow: 1,
        paddingTop: '2%'
    }
})

const ProjectView = () => {
    const query = useQuery();
    const projectId = query.get('projectId');
    const history = useHistory();
    const [project, setProject] = useState<Project>();
    const classes = useStyles();
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
    return (
       <Box className={classes.root}>
            {
                !project ? <CircularProgress /> :
                <Box className={classes.root}>
                    <Typography variant='h3'>{project.title}</Typography>
                    <Box style={{display: 'flex', flexDirection: 'column', height: '80%', justifyContent: 'space-around', alignItems: 'flex-start'}}>
                        <Typography variant='h4'>
                            {project?.description}
                        </Typography>
                        <Typography>
                            {project?.content}
                        </Typography>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default ProjectView;