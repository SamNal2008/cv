import { Box, withStyles } from "@material-ui/core"

const SubBox = withStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '95%',
        height: '100%',
        paddingBottom: '2%',
        backgroundColor: 'yellow'
    }
})(Box)

export default SubBox;