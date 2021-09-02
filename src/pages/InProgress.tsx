import { Box, makeStyles, Typography } from "@material-ui/core";
import renovationImg from '../images/renovation.jpg';
import '../styles/InProgress.css';

const InProgress = () => {
    document.title = 'En cours ...';
    return (
        <Box className={"in-progress-page"}>
           <Typography variant='h1' style={{padding: '13.1%',color: 'white'}}>
               Cette page est en cours de developpement
            </Typography>
        </Box>
    )
}

export default InProgress;