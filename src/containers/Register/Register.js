import React from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const Register = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (<Grid container justify="center">

    <Grid item md={6}>
      <Paper className={classes.root}>
        <Typography variant="h3">Register form</Typography>

        <form onSubmit={handleSubmit}>

          <TextField
              fullWidth
              required
              label="Email"
              type="email"
              margin="normal"
            />

          <TextField
              fullWidth
              required
              label="Password"
              type="password"
              margin="normal"
            />

          <TextField
              fullWidth
              required
              label="Confirm Password"
              type="password"
              margin="normal"
            />

          <TextField
              fullWidth
              required
              label="Fullname"
              margin="normal"
            />

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

export default Register;