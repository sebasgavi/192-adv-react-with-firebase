import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Document from '../Document/Document';
import Register from '../Register/Register';

function App() {
  
  return (<Router>

    <Route path="/register" component={Register} />
    <Route path="/" exact component={Document} />
    
  </Router>);
}

export default App;
