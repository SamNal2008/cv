import { Typography, Box, Divider } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import { EnumType } from "typescript";
import FlexCenterColBox from "./custom-material/Box/FlexCenterColBox";
import LittleChipset from "./custom-material/LittleChipset";
import {$enum} from "ts-enum-util";
import { Interest, InterestCategory } from "../utils/about";


interface AboutFunProps {
    category: any,
    title: string,
    interests: Interest[],
    last?: string
} 

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '10vw'
    },
});

const AboutFun = ({...props} : AboutFunProps) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography sx={{fontWeight: 'bold'}} variant='h5'>{props.title}</Typography>
            <Box>
                {$enum(props.category).getValues().map(interestCategory => 
                    <Box style={{paddingTop: '10%'}}>
                        <Box style={{display: 'flex',  flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Typography variant='h6'>{interestCategory}</Typography>
                            {props.interests?.filter(interest => interest.category === interestCategory).map(interest => <Typography>{interest.name}</Typography>)}
                        </Box>
                        {interestCategory !== props.last ? <Divider flexItem={true} orientation='vertical'/> : <></>}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default AboutFun