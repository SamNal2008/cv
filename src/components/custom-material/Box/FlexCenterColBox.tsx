import { Box, withStyles } from "@material-ui/core"
import { primaryMainColor } from "../../../utils/theme";

const FlexCenterColBox = withStyles({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5%',
    },
})(Box)

export default FlexCenterColBox;