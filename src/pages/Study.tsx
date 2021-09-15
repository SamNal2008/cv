import { doc, getDoc } from "@firebase/firestore";
import { Box, Button, CircularProgress, makeStyles, Typography } from "@material-ui/core"
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuthState } from "../components/AuthContext";
import { firestore, save } from "../utils/firebase";
import Study from "../utils/study";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '80vh',
        width: '100%',
        flexGrow: 1,
        paddingTop: '2%'
    },
    main: {
        minHeight: '60vh',
        minWidth: '60vw'
    },
    editor: {
        minHeight: '80vh',
        minWidth: '80vw',
    },
    displayer: {
        padding: '2%',
        minHeight: '80vh',
        minWidth: '80vw',
        margin: '1%',
    },
    displayContent : {
        minWidth: '70vw',
        minHeight: '70vh',
    }
});


const defaultStudy: Study = {
    description: 'description',
    id: 'id',
    finishedDate: '11/09/2013',
    startedDate: '11/09/2016',
    logo: 'toto.png',
    place: 'Rabat, Maroc',
    schoolName: 'Lycée Descartes',
    websiteUrl: 'https://www.descartes.ma',
    diploma: 'Bac'
}

const StudyView = () => {
    document.title = 'Formation';
    const query = useQuery();
    const studyId = query.get('studyId');
    const history = useHistory();
    const classes = useStyles();

    const { user } = useAuthState();

    const [study, setStudy] = useState<Study>();
    const [loaded, setLoaded] = useState(false);
    
    const fetchStudyInfo = async (studyId: string) => {
        if (studyId === 'id') {
            setStudy(defaultStudy);
        }
        const docRef = doc(firestore, 'studies', studyId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            let data: any = docSnap.data();
            if (!data.content) {
                data.content = '# Fill me'
            }
            if (data.schoolName) {
                document.title = 'data.schoolName';
            }
            setStudy(data);
        }
        else {
            console.log('Study not found');
        }
    }

    const updateContent = () => {
        save('studies', study);
        console.log('Study updated')
    }
      
    
    useEffect(() => {
        if (!loaded) {

            if (studyId && !study) {
                fetchStudyInfo(studyId).then(() => setLoaded(true));
            }
            else
            {
                setStudy(defaultStudy);
            }
            setLoaded(true);
        }
    }, [loaded]);
    
    return (
       <Box className={classes.root}>
            {
                !study ? <CircularProgress /> :
                <>
                    <Typography variant='h2'>
                        {study?.schoolName}
                    </Typography>
                    {user?.isAdmin ? <><MDEditor
                        className={classes.editor}
                        value={study.content}
                        onChange={(e) => setStudy({
                            description: study.description,
                            id: study.id,
                            schoolName: study.schoolName,
                            finishedDate: study.finishedDate,
                            startedDate: study.startedDate,
                            content: e,
                            logo: study.logo,
                            place: study.place,
                            websiteUrl: study.websiteUrl,
                            diploma: study.diploma
                        })}
                      /><Button onClick={updateContent}>Valider</Button></> :  <div className={classes.displayer}><MDEditor.Markdown className={classes.displayContent} source={study.content} /></div>
                    }
                   
                </>   
            }
        </Box>
    )
}

export default StudyView;