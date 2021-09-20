import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse, Divider, Switch, Typography } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import { primaryMainColor, secondaryMainColor } from "../utils/theme";
import { useAuthState } from "./AuthContext";
import SubBox from "./custom-material/Box/SubBox";
import SubTitleBox from "./custom-material/Box/SubTitleBox";

const HomeBox = ({title, component, subtitle} : {title: string, component: JSX.Element, subtitle?: string}) => {
    const [checked, setChecked] = useState(false);
    const {user} = useAuthState();

    const handleChange = () => {
        setChecked(!checked)
    }

    return (
        <Box style={{width: '90%', paddingBottom: '1%'}}>
            <Accordion expanded={checked} onChange={handleChange} >
                <AccordionSummary
                    expandIcon={<ExpandMore color={"secondary"}/>}
                    aria-controls='panel1bh-content'
                    id='panel1bh-header'
                    >
                    <Box style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flex: '1 1'}}>
                        <Typography variant='h4' style={{color: secondaryMainColor}}>
                            {title}
                        </Typography>
                        <Typography variant='h6' style={{color: secondaryMainColor, marginLeft: '1%'}}>
                            ({subtitle})
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    {component}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default HomeBox;