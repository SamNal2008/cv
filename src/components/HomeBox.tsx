import { Box, Collapse, Switch, Typography } from "@material-ui/core"
import { useState } from "react";
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
        <SubBox>
            <SubTitleBox>
                <Typography variant='h2' color='secondary'>
                    {title}
                </Typography>
                <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography variant='body1' color='primary'>
                        {message}
                    </Typography>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        name="studiesChecked"
                        inputProps={{ 'aria-label': 'Studies checkbox' }}
                    />
                </Box>
            </SubTitleBox>
            <Collapse style={{width: '100%'}} in={checked}>
                {component}
            </Collapse>
        </SubBox>
    )
}

export default HomeBox;