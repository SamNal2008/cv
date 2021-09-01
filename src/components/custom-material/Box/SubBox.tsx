import { Box, withStyles } from "@material-ui/core"

const SubBox = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '95%',
        marginBottom: '2%'
    }
})(Box)

export default SubBox;