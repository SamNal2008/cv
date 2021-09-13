import { getFirestore } from "@firebase/firestore";
import { Box, makeStyles, TextareaAutosize, Typography } from "@material-ui/core";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { fetchImage, firestore } from "../utils/firebase";
import { Project, ProjectType } from "../utils/project";
import CircularProgress from '@material-ui/core/CircularProgress';
// @ts-ignore
import AppMarkdown from '../images/Titi.md'; 
import { useAuthState } from "../components/AuthContext";
import MDEditor from '@uiw/react-md-editor';
import { useTimeout } from "@react-md/utils";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '80vh',
        width: '100%',
        flexGrow: 1,
        paddingTop: '2%'
    },
    main: {
        minHeight: '60vh',
        minWidth: '60vw'
    }
})

const ProjectView = () => {
    const query = useQuery();
    const projectId = query.get('projectId');
    const history = useHistory();
    const classes = useStyles();

    const { user } = useAuthState();

    const [project, setProject] = useState<Project>();
    const [mdFile, setMdFile] = useState<any>('');
    const [loaded, setLoaded] = useState(false);

    const loadContent = async () => {
        if (project && project.id !== '-1') {
            let mdUrl = await fetchImage(`projects/${project?.id}`);
            if (mdUrl) {
                fetch(mdUrl)
                .then((res) => res.text())
                .then((md) => { setMdFile(md) });
            }
            else {
                fetch(AppMarkdown)
                .then((res) => res.text())
                .then((md) => { setMdFile(md) });
            }
        }
    }

    setTimeout(() => {
        if (!project) {
            setProject({
                description: 'Projet de test si firebase est down',
                id: '-1',
                title: 'Projet offline',
                type: ProjectType.Professional,
            })
        }
        else {
            console.log('ko')
        }
    }, 2000);

    const fetchProjectInfo = async (projectId: string) => {
        const docRef = doc(firestore, 'projects', projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let data: any = docSnap.data();
            setProject(data);
            if (data.id !== '-1') {
                let mdUrl = await fetchImage(`projects/${data.id}`);
                if (mdUrl) {
                    fetch(mdUrl)
                    .then((res) => res.text())
                    .then((md) => { setMdFile(md) });
                }
                else {
                    fetch(AppMarkdown)
                    .then((res) => res.text())
                    .then((md) => { setMdFile(md) });
                }
            }
        }
        else {
            console.log('Project not found');
            history.push('/cv');
        }
    }
      
    
    useEffect(() => {
        if (projectId && !loaded) {
            fetchProjectInfo(projectId).then(() => setLoaded(true));
        }
        else 
            history.push('/')
    }, [loaded]);
    
    return (
       <Box className={classes.root}>
            {
                !project ? <CircularProgress /> :
                <>
                    {true ? <MDEditor
                        value={mdFile}
                        // @ts-ignore
                        onChange={setMdFile}
                      /> : <></>}
                    <MDEditor.Markdown source={mdFile} />
                </>
                        
            }
        </Box>
    )
}

export default ProjectView;