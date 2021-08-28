import { Box, Typography } from "@material-ui/core";

const Home = () => {
    document.title = 'Accueil';
    return (
        <Box>
            <Typography variant='h1'>
                Bienvenu sur mon site
            </Typography>
        </Box>
    )
}

export default Home;

