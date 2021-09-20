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
        alignItems: 'stretch',
        justifyContent: 'stretch',
        flex: '1 1'
    },
    subBox: {
        display: 'flex',
        paddingTop: '1%',
        justifyContent: 'flex-start',
        gap: '10px',
        alignItems: 'center',
        flex: '1 1'
    }
});

const AboutFun = ({...props} : AboutFunProps) => {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography sx={{fontWeight: 'bold'}} variant='h5'>{props.title}</Typography>
                {$enum(props.category).getValues().map(interestCategory => 
                    <Box className={classes.subBox}>
                        <Typography variant='h6' style={{textDecoration: 'underline'}}>{interestCategory}</Typography>
                        {props.interests?.filter(interest => interest.category === interestCategory).map(interest => <Typography>{interest.name}</Typography>)}
                    </Box>
                )}
        </Box>
    )
}

export default AboutFun