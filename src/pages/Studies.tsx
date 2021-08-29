import { Box, makeStyles, Typography } from "@material-ui/core";
import StudyCard from "../components/StudyCard";
import Study from "../utils/study";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        marginTop: '1%',
        marginBottom: '1%'
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        color: 'white',
      },
  }));

const Studies = (): JSX.Element => {
    let epita: Study = {
        description: 'Ecole sympathique',
        diploma: 'Diplome d\'ingénieur',
        finishedDate: new Date("2016-09-02"),
        place: 'Paris, France',
        schoolName: 'EPITA',
        startedDate: new Date("2022-09-01")
    };
    const classes = useStyles();
    document.title = 'Formations';
    return (
        <Box className={classes.root}>
            <StudyCard {...epita}/>
        </Box>
    )
}

export default Studies;