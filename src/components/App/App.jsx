import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';
import PizzaCart from '../PizzaCart/PizzaCart';

function App() {

  return (
    <Router>
      <nav id='navbar'>
        <h3><Link to='/'>Home</Link></h3>
        <h3><Link to='/menu'>Menu</Link></h3>
        <h3><Link to='/cart'>Cart</Link></h3>
      </nav>
      <Switch>
        <Route path='/' exact>
          <div className='App'>
            <header className='App-header'>
              <h1 className='App-title'>Prime Pizza</h1>
            </header>
            <img src='images/pizza_photo.png' />
            <p>Pizza is great.</p>
          </div>
        </Route>
        <Route path='/cart'>
          <PizzaCart />
        </Route>
        <Route path='/menu'>
          <PizzaList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
