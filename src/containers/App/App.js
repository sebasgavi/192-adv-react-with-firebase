import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Document from '../Document/Document';
import Register from '../Register/Register';
import { makeStyles } from '@material-ui/core';

function App() {
  const classes = useStyles();
  
  return (<Router>

    <Route path="/register" component={Register} />
    <Route path="/" exact component={Document} />
    
  </Router>);
}

const useStyles = makeStyles((theme) => {
  return {
    '@global': {
      body: {
        margin: 0,
        backgroundColor: 'lightgray',
      },
      '*': {
        boxSizing: 'border-box',
      },
      p: {
        fontFamily: 'sans-serif',
        margin: 0,
      },
    },
  }
})

export default App;
