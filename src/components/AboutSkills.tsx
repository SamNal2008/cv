import { Typography, Box, Divider } from "@mui/material"
import { EnumType } from "typescript"
import FlexCenterColBox from "./custom-material/Box/FlexCenterColBox"
import LittleChipset from "./custom-material/LittleChipset"
import {$enum} from "ts-enum-util";

interface AboutSkillsProps {
    category: any,
    title: string,
    skills: any[],
    last?: string
} 

const AboutSkills = ({...props} : AboutSkillsProps) => {
    return (
        <FlexCenterColBox>
            <Typography sx={{fontWeight: 'bold', marginTop: '5%'}} variant='h5'>{props.title}</Typography>
            <Box style={{display: 'flex', width: '100%', paddingTop: '3%', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', minHeight: '30vh'}}>
                {$enum(props.category).getValues().map(skillCategory => 
                    <>
                        <Box>
                            <Typography variant='h6' sx={{textDecoration: 'underline'}}>{skillCategory}</Typography>
                            {props.skills?.filter(skill => skill.category === skillCategory).map(hrd => <LittleChipset primary={hrd.name} icon={hrd.icon}/>)}
                        </Box>
                        {skillCategory !== props.last ? <Divider flexItem={true} orientation='vertical'/> : <></>}
                    </>
                )}
            </Box>
        </FlexCenterColBox>
    )
}

export default AboutSkills