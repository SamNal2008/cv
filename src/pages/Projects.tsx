import { Box, makeStyles } from "@material-ui/core";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../utils/project";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        width: '100%',
        height: '100%'
    }
});

export default function Projects() {

    const [projects, setProjects] = useState<Project[]>([{
        description: 'Petit projet sympa',
        id: 1,
        title: '42SH'
    },
    {
        description: 'Petit projet sympa',
        id: 1,
        title: '42SH'
    }]);
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {
                projects.map(project => <ProjectCard {...project} />)
            }
        </Box>
    )
}