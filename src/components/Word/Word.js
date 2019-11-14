import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Menu, Button } from '@material-ui/core';

export const Word = (props) => {
  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const classes = useStyles();
  const handleClick = (event) => {
    setAnchorEl(event.target);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (<span className={classes.root}
    onClick={handleClick}>
    {props.children}
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
      <Button>
        Bold
      </Button>
    </Menu>
  </span>);
}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      marginLeft: 5,
    },
  }
});