import React from 'react';
import { Paper, Typography, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { EditRounded as EditIcon, RemoveRedEyeRounded as EyeIcon } from '@material-ui/icons';

function App() {
  const [ isEditable, setEditable ] = React.useState(false);

  const classes = useStyles();

  const handleEditClick = () => {
    setEditable((previousValue) => !previousValue);
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>

        <Paper>
          <Typography contentEditable={isEditable} className={classes.title}>
            El título
          </Typography>
        </Paper>

        <Paper className={classes.document}>
          
        </Paper>
      </div>

      <Fab color="secondary" aria-label="edit" className={classes.fab}
        onClick={handleEditClick}>
        {isEditable && <EyeIcon />}
        {!isEditable && <EditIcon />}
      </Fab>
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
    fab: {
      position: 'fixed',
      right: 40,
      bottom: 40,
    }
  }
});

export default App;
