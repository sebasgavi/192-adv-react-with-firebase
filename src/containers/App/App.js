import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Document from '../Document';

function App() {
  
  return (<Router>

    <Route path="/" exact component={Document} />
    
  </Router>);
}

export default App;
