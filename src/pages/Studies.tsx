import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { useAuthState } from "../components/AuthContext";
import StudyCard from "../components/StudyCard";
import Study from "../utils/study";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        paddingTop: '1%',
        paddingBottom: '1%',
        height: '100%'
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
        color: 'white',
      },
      formationsBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2%'
      }
  }));

export const createNewFormation = (study: Study) => {
  console.log(study);
}

const Studies = (): JSX.Element => {
    let epita: Study = {
        description: 'Ecole sympathique',
        diploma: 'Diplome d\'ingénieur',
        finishedDate: new Date("2016-09-02"),
        place: 'Paris, France',
        schoolName: 'EPITA',
        startedDate: new Date("2022-09-01"),
        id: '1',
        logo: '1',
        websiteUrl: 'www.epita.fr'
    };
    const [studies, setStudies] = useState<Study[]>([epita, epita, epita, epita, epita]);
    const classes = useStyles();
    const { user } = useAuthState();
    document.title = 'Formations';
    return (
        <Box className={classes.root}>
          <Box style={{paddingBottom: '2%'}}>
            <Typography variant="h2">
              Formations
            </Typography>
          </Box>
          <Box className={classes.formationsBox}>
            {
                studies.map(study => <Box style={{padding: '1%'}}><StudyCard {...study}/></Box>)
            }
          </Box>
          {user?.isAdmin ? <Button>Ajouter une nouvelle formation</Button> : <></>}
        </Box>
    )
}

export default Studies;