import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchImage, firestore, save } from "../utils/firebase";
import { Project, ProjectType } from "../utils/project";
import CircularProgress from '@material-ui/core/CircularProgress'; 
import { useAuthState } from "../components/AuthContext";
import MDEditor from '@uiw/react-md-editor';
import ContentType from "../utils/contentTypes";
import renovation from '../images/renovation.jpg';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        width: '99vw',
        flex: '1 1 0',
        paddingTop: '2%',
        paddingBottom: '2%'
    },
    main: {
        minHeight: '60vh',
        minWidth: '60vw'
    },
    editor: {
        minHeight: '80vh',
        minWidth: '80vw',
    },
    displayer: {
        paddingTop: '2%',
        minHeight: '80vh',
    },
    displayContent : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: '50vw'
    }
})

const ProjectView = () => {
    const query = useQuery();
    const projectId = query.get('projectId');
    const history = useHistory();
    const classes = useStyles();
    const [picture, setPicture] = useState('');

    const { user } = useAuthState();

    const [project, setProject] = useState<Project>();
    const [loaded, setLoaded] = useState(false);
    
    const fetchProjectInfo = async (projectId: string) => {
        if (projectId === 'id') {
            setProject({
                description: 'description',
                id: 'id',
                title: 'title',
                type: ProjectType.Personal,
            });
            return;
        }
        const docRef = doc(firestore, ContentType.projects, projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let data: any = docSnap.data();
            if (!data.content) {
                data.content = '# Fill me'
            }
            setProject(data);
        }
        else {
            console.log('Project not found');
            history.push('/');
        }
    }

    const updateContent = () => {
        save(ContentType.projects, project);
        console.log('Project updated');
        history.push('/projects');
    }
    
    useEffect(() => {
        if (!loaded) {

            if (projectId && !project) {
                fetchProjectInfo(projectId).then(() => setLoaded(true));
            }
            else
            {
                setProject({
                    description: 'Petite description',
                    id: '-1',
                    title: 'Projet titre',
                    type: ProjectType.Professional,
                    content: '# Fill me'
                })
            }
            setLoaded(true);
        }
    }, [loaded]);
    
    return (
       <Box className={classes.root}>
            {
                !loaded || !project ? <CircularProgress /> :
                <>
                    <Typography variant='h2'>
                        {project?.title}
                    </Typography>
                    {user?.isAdmin ? <><MDEditor
                        className={classes.editor}
                        value={project.content}
                        onChange={(e) => setProject({
                            description: project.description,
                            id: project.id,
                            title: project.title,
                            type: project.type,
                            content: e,
                            githubLink: project.githubLink,
                            photoUrl: project.photoUrl
                        })}
                      /><Button onClick={updateContent}>Valider</Button></> :  <div className={classes.displayer}><MDEditor.Markdown className={classes.displayContent} source={project.content} /></div>
                    }
                   
                </>   
            }
        </Box>
    )
}

export default ProjectView;