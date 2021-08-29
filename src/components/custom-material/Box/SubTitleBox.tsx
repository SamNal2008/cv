import { Box, withStyles } from "@material-ui/core"
import { primaryMainColor } from "../../../utils/theme";

const SubTitleBox = withStyles({
    root: {
        backgroundColor: primaryMainColor,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5%'
    },
})(Box)

export default SubTitleBox;