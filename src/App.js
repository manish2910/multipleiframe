import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';
import PrivateRoute from './routing/routing'
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Main} />
    </Router>
  );
}

export default App;
