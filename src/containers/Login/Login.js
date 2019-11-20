import React from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { fb } from '../../utils/firebase';

const Login = () => {
  const classes = useStyles();
  const [ error, setError ] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    
    fb.auth().signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorMessage = error.message;
        setError(errorMessage);
      });
  }

  return (<Grid container justify="center">

    <Grid item md={6}>
      <Paper className={classes.root}>
        <Typography variant="h3">Register form</Typography>

        <form onSubmit={handleSubmit}>

          <TextField
              fullWidth
              required
              name="email"
              label="Email"
              type="email"
              margin="normal"
            />

          <TextField
              fullWidth
              required
              name="password"
              label="Password"
              type="password"
              margin="normal"
            />

          {error && <Typography>{error}</Typography>}

          <Button type="submit" color="primary" variant="contained">
            Register
          </Button>
        </form>
      </Paper>
    </Grid>

  </Grid>);
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginTop: 80,
      padding: 10,
    }
  }
});

export default Login;