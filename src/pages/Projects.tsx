import { Backdrop, Box, Button, CircularProgress, Collapse, Fade, makeStyles, Theme, Typography } from "@material-ui/core";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../utils/project";
import theme from "../utils/theme";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    subBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'baseline',
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
    }
});

export default function Projects() {

    const [schoolProjects, setSchoolProjects] = useState<Project[]>([{
        description: 'Petit projet sympa',
        id: 1,
        title: '42SH'
    },
    {
        description: 'Petit projet sympa',
        id: 1,
        title: '42SH'
    }]);

    const [professionalProjects, setProfessionalProjects] = useState<Project[]>();
    const [personalProjects, setPersonalProjects] = useState<Project[]>([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(!open);
    }

    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant='h2' className={classes.title}>
                Projets
            </Typography>
            <Typography variant='h3' className={classes.subTitle}>
                {schoolProjects.length > 1 ? 'Projets en école' : 'Projet en école'}
            </Typography>
                <Box className={classes.subBox}>
                    {
                        schoolProjects.map(project => <ProjectCard {...project} />)
                    }
                </Box>
            <Typography variant='h3'>
                {schoolProjects.length > 1 ? 'Projets personnels' : 'Projet personnel'}
            </Typography>
            <Box className={classes.subBox}>
                {
                    personalProjects.map(project => <ProjectCard {...project} />)
                }
            </Box>
        </Box>
    )
}