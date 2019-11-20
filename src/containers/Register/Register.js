import React from 'react';
import { Button, TextField } from '@material-ui/core';

const Register = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (<div>

    <form onSubmit={handleSubmit}>

      <TextField
          required
          id="standard-required"
          label="Email"
          margin="normal"
        />

      <Button type="submit">
        Register
      </Button>
    </form>

  </div>);
}

export default Register;