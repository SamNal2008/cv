import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { primaryMainColor, secondaryMainColor } from '../utils/theme';
import { openInNewTab } from '../utils/functions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © Samy Nalbandian '}
      <Link color="primary" href="https://samnal2008.github.io/cv-react">
        Mon CV en ligne
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: secondaryMainColor
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
        <footer className={classes.footer}>
          <Container maxWidth="sm">
              <Typography variant="body1">Me contacter : <Link style={{cursor: 'pointer'}} onClick={() => openInNewTab('https://linkedin.com/in/snal.com')}>Linkedin</Link></Typography>
              <Copyright />
          </Container>
        </footer>
  );
}