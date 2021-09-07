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
            '@media screen and (max-width: 1300px)': {
                fontSize: '2rem'
            }
        },
        h2: {
            fontFamily: [
                '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'
            ].join(','),
            '@media screen and (max-width: 1300px)': {
                fontSize: '1.7rem'
            }
        },
        allVariants: {
            color: writtingColor,
        }
    },
    props: {
        MuiButton: {
            color: 'secondary',
            style: {backgroundColor: primaryMainColor, height: '100%'}
        },
        MuiTab: {
            color: 'primary',
        },
        MuiTabs: {
            indicatorColor: 'secondary'
        },
        MuiLink: {
            style: {
                textDecoration: 'none',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    }
});

defaultTheme = responsiveFontSizes(defaultTheme);

export default defaultTheme;