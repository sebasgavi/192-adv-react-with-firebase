import React from 'react';
import { Paper, Typography, createMuiTheme } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme();

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>

        <Paper>
          <Typography className={classes.title}>
            El título
          </Typography>
        </Paper>

        <Paper className={classes.document}>
          
        </Paper>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      body: {
        margin: 0,
      },
      '*': {
        boxSizing: 'border-box',
      },
    },
    root: {
      backgroundColor: 'lightgray',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: 40,
    },
    container: {
      width: 800,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '1.4rem',
      fontWeight: 'bold',
      padding: '6px 8px',
    },
    document: {
      marginTop: 20,
      flexBasis: 'auto',
      flexGrow: 1,
    },
  }
});

export default App;
