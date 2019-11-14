import React from 'react';
import { makeStyles } from '@material-ui/styles';

export const Word = (props) => {
  const classes = useStyles();
  return (<span className={classes.root}>
    {props.children}
  </span>);
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginLeft: 5,
    },
  }
});