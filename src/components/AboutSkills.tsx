import { Typography, Box, Divider, Grid, GridSize } from "@mui/material"
import { EnumType } from "typescript"
import FlexCenterColBox from "./custom-material/Box/FlexCenterColBox"
import LittleChipset from "./custom-material/LittleChipset"
import {$enum} from "ts-enum-util";
import { useEffect, useState } from "react";
import FlexCenterRowBox from "./custom-material/Box/FlexCenterRowBox";
import { makeStyles } from "@material-ui/core";

interface AboutSkillsProps {
    category: any,
    title: string,
    skills: any[],
    last?: string
} 

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex: '1 1',
        paddingTop: '2%'
    },
    categoriesBox: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: '1%',
        flex: '1 1',
    },
    category: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flex: '1 1',
    }

})

const AboutSkills = ({...props} : AboutSkillsProps) => {
    
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Typography sx={{fontWeight: 'bold'}} variant='h5'>{props.title}</Typography>
            <Box className={classes.categoriesBox}>{$enum(props.category).getValues().map(skillCategory =>       
                    <>
                        <Box className={classes.category}>
                            <Typography variant='h6' sx={{textDecoration: 'underline'}}>{skillCategory} :</Typography>
                            {props.skills?.filter(skill => skill.category === skillCategory).map((hrd) => <LittleChipset primary={hrd.name} secondary={hrd.content} icon={hrd.icon}/>)}
                        </Box>
                        <Divider orientation='vertical' flexItem={true}/>
                    </>
                )}
            </Box>
        </Box>
    )
}

export default AboutSkills