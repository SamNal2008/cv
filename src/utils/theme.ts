import { createTheme, responsiveFontSizes } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
import { green } from "@material-ui/core/colors";
import { create } from "jss";


export const writtingColor = '#373741';
export const primaryMainColor = '#b28376';
export const secondaryMainColor = '#e1d8cf'

let defaultTheme = createTheme({
    palette: {
        primary: {
            main: primaryMainColor,
        },
        secondary: {
            main: secondaryMainColor,
        },
        error: {
            main: '#C25451'
        },
        warning: {
            main: '#FF8982'
        },
        success: {
            main: '#659B91'
        },
        info: {
            main: '#C0E1D2'
        },
    },
    typography: {
        h1: {
            fontFamily: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'].join(','),
            fontSize: '2rem',
            '@media (min-width:1000px)': {
                fontSize: '0.1rem'
            },
            color: writtingColor,
        },
        h2: {
            fontFamily: [
                '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'
            ].join(','),
        },
        body1: {
            color: writtingColor,
        }
    },
    props: {
        MuiButton: {
            color: 'secondary',
        },
        MuiTab: {
            color: 'primary',
        },
        MuiTabs: {
            indicatorColor: 'secondary'
        }
    }
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default defaultTheme;