import { Typography } from "@material-ui/core";
import { useAuthState } from "../components/AuthContext";

const Profile = () => {
    const { user } = useAuthState();
    return (
        <div style={{height :'80vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant='h4'>
                Bienvenu {user && user.displayName ? user.displayName : 'Inconnu'}
            </Typography>
        </div>
    )
}

export default Profile;