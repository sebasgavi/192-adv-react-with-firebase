import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Document from '../Document/Document';
import Register from '../Register/Register';
import { makeStyles } from '@material-ui/core';
import Login from '../Login/Login';
import { fb } from '../../utils/firebase';

function App() {
  const classes = useStyles();

  const [ user, setUser ] = React.useState(null);

  React.useEffect(() => {
    return fb.auth().onAuthStateChanged(function(user) {
      if(user){
        let db = fb.firestore();
        db.collection('users').doc(user.uid).get()
          .then((doc) => {
            setUser({
              ...doc.data(),
              uid: user.uid,
            });
          });
      } else {
        setUser(null);
      }
    });
  }, []);
  
  return (<Router>

    <Route path="/login" render={() => <Login user={user} />} />
    <Route path="/register" render={() => <Register user={user} />} />
    <Route path="/" exact render={() => <Document user={user} />} />

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
