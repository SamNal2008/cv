import { Box, CircularProgress, makeStyles } from "@material-ui/core"
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { firestore, get } from "../utils/firebase";
import { Project } from "../utils/project";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1%'
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '80%',
        height: '100%'
    }
})


const ProjectsList = () => {
    const classes = useStyles();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        get('projects').then(res => {
            if (res)
                setProjects(res);
            setLoaded(true);
        }).catch(() => setLoaded(true));
    }, [loaded]);


    return (
        <Box className={classes.main}>
            {!loaded ? <CircularProgress/> : 
                <Box className={classes.root}>
                    {projects.map(prj => <ProjectCard {...prj}/>)}
                </Box>
            }
        </Box>
    )
}

export default ProjectsList;