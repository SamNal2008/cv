import { collection } from "@firebase/firestore";
import { Backdrop, Box, Button, CircularProgress, Collapse, Fade, makeStyles, Theme, Typography } from "@material-ui/core";
import { getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "../components/AuthContext";
import NewProjectForm from "../components/NewProjectForm";
import ProjectCard from "../components/ProjectCard";
import ContentType from "../utils/contentTypes";
import { deleteObj, firestore, get, getOne, save } from "../utils/firebase";
import { Project, ProjectType } from "../utils/project";
import theme from "../utils/theme";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        minHeight: '80vh',
        paddingBottom: '1%'
    },
    subBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        width: '100%',
        height: '100%',
        paddingBottom: '3%'
    },
    subTitle: {
        paddingBottom: '2%'
    },
    title: {
        paddingBottom: '4%'
    },
    collapse: {
        width: '100%'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        width: '100%',
        height: '100%',
        top: '0%',
        left: '0%'
      },
});

export default function Projects() {

    const [projects, setProjects] = useState<Project[]>([]);
    const [open, setOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const handleClose = () => {
        setOpen(!open);
    }

    useEffect(() => {
        get(ContentType.projects).then(res => {
            if (res)
                setProjects(res);
            setLoaded(true);
        }).catch(() => {setLoaded(true); setProjects([
            {
                description: 'description',
                id: 'id',
                title: 'title',
                type: ProjectType.Personal,
            }
        ])});
    }, [loaded]);


    const { user } = useAuthState();
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant='h2' className={classes.title}>
                Projets
            </Typography>
            { loaded ? 
            <>
            <Typography variant='h3'>
                {projects.length > 1 ? 'Projets professionnels' : 'Projet professionnel'}
            </Typography>
            <Box className={classes.subBox}>
                {
                    projects.filter(project => project.type === ProjectType.Professional).map(project => <ProjectCard {...project} />)
                }
            </Box>
            <Typography variant='h3' className={classes.subTitle}>
                {projects.length > 1 ? 'Projets en école' : 'Projet en école'}
            </Typography>
                <Box className={classes.subBox}>
                    {
                        projects.filter(project => project.type === ProjectType.School).map(project => <ProjectCard {...project} />)
                    }
                </Box>
            <Typography variant='h3'>
                {projects.length > 1 ? 'Projets personnels' : 'Projet personnel'}
            </Typography>
            <Box className={classes.subBox}>
                {
                    projects.filter(project => project.type === ProjectType.Personal).map(project => <ProjectCard {...project} />)
                }
            </Box></> : <CircularProgress/> }
            {user?.isAdmin ? <Button onClick={() => setOpen(!open)}>Ajouter un nouveau projet</Button> : <></>}
            <Collapse in={open} style={{height: '100%'}}>
                <NewProjectForm open={open} handleValidate={() => {setOpen(!open); setLoaded(false);}} handleClose={() => setOpen(!open)}/>
            </Collapse>
        </Box>
    )
}