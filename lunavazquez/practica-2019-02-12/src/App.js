import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Profile from './views/Profile';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        {/* ruta con parametro */}
        <Route exact path="/profile/:userId" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
