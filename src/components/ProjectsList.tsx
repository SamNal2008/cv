import { Box, CircularProgress, makeStyles } from "@material-ui/core"
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { firestore } from "../utils/firebase";
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
        const fetchProjects = async () => {
            const q = query(collection(firestore, "projects"));
            const querySnapshots = await getDocs(q);
            let tmpProjects: any[] = [];
            querySnapshots.forEach((project: any) => {
                console.log(project.data());
                if (tmpProjects.length < 8)
                    tmpProjects.push(project.data());
            });
            setProjects(tmpProjects);
            setLoaded(true);
        }
        fetchProjects();
    }, [loaded])


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