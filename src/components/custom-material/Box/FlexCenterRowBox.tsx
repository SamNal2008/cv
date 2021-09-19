import { Box, withStyles } from "@material-ui/core"
import { primaryMainColor } from "../../../utils/theme";

const FlexCenterRowBox = withStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5%'
    },
})(Box)

export default FlexCenterRowBox;