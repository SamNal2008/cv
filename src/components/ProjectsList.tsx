import { Box, CircularProgress, makeStyles } from "@material-ui/core"
import { useEffect } from "react";
import { useState } from "react";
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

    const fetchProjects = () => {
        /* axios.get('/studies').then(res => {
            setStudies(res.data);
        });*/
        let sh: Project = {
            description: 'Réalisation d\'un bash posix',
            id: 1,
            title: '42SH'
        };
        let spider: Project = {
            description: 'Réalisation d\'un serveur web',
            id: 2,
            title: 'Spider Web Server'
        };
        let jws: Project = {
            description: 'Réalisation d\'un serveur web',
            id: 2,
            title: 'Spider Web Server'
        };
        return [sh, spider, jws, jws, jws, jws, jws, jws, jws];
    }

    useEffect(() => {
        setProjects(fetchProjects());
        setLoaded(true);
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