import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, NavLink} from 'react-router-dom';
import Home from './Home';
import History from './History';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
          <div>
          <NavLink exact to="/" activeStyle={{color: 'red'}}>Home</NavLink>
          <NavLink to="/notre-histoire" activeStyle={{color: 'red'}}>History</NavLink>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/notre-histoire' component={History} />
            </Switch>
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
