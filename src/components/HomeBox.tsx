import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse, Divider, Switch, Typography } from "@material-ui/core"
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";
import { primaryMainColor, secondaryMainColor } from "../utils/theme";
import { useAuthState } from "./AuthContext";
import SubBox from "./custom-material/Box/SubBox";
import SubTitleBox from "./custom-material/Box/SubTitleBox";

const HomeBox = ({title, message, component} : {title: string, message: string, component: JSX.Element}) => {
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
                    style={{color: secondaryMainColor, backgroundColor: primaryMainColor}}
                    >
                    <Typography variant='h4' style={{color: secondaryMainColor}}>
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {component}
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default HomeBox;