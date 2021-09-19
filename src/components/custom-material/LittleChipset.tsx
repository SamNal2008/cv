import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";


interface LittleChipsetProps {
    primary: string,
    icon: any,
    secondary?: string
}

const LittleChipset = ({...props}: LittleChipsetProps) => {
    return (
        <ListItem>
            <ListItemAvatar>
                {props.icon ? <Avatar alt={props.primary} src={props.icon} /> : <></>}
            </ListItemAvatar>
            <ListItemText
                primary={props.primary ? props.primary : ""}
                secondary={props.secondary ? props.secondary : ""}
                />
        </ListItem>
    );
}

export default LittleChipset;