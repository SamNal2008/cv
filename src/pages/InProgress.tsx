import { Box, Typography } from "@material-ui/core"


const InProgress = () => {
    document.title = 'En cours ...';
    return (
        <Box>
           <Typography variant='h1'>
               Cette page est en cours de developpement
            </Typography>
        </Box>
    )
}

export default InProgress;