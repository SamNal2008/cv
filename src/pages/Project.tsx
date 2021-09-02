import { Box } from "@material-ui/core";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ProjectView = () => {
    const query = useQuery();
    const projectId = query.get('projectId');
    useEffect(() => {

    })
    return (
        <Box>
            {projectId}
        </Box>
    )
}

export default ProjectView;