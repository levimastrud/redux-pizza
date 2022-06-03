// React and axios

import React from 'react';
import axios from 'axios';

// Hooks

import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Importing other files

import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import PizzaCart from '../PizzaCart/PizzaCart';
import CustomerForm from '../CustomerForm/CustomerForm';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';
import home from './homeicon.svg';
import cart from './shoppingcart.svg'

function App() {
  const [newOrder, setNewOrder] = useState([])


  return (
    <Router>
      <nav id='navbar'>
        <h3><Link to='/'><img id = 'home-icon' src={home}></img></Link></h3>
        <h3 id='menu-nav'><Link to='/menu'>MENU</Link></h3>
        <h3><Link to='/cart'><img id = 'cart-icon' src={cart}></img></Link></h3>
      </nav>
      <Switch>
        <Route path='/' exact>
          <div className='App'>
            <header className='App-header'>
              <h1 className='App-title'>Pop's Prison of Pizza</h1>
            </header>
            <div className='wrapper'>
            <div className='home'>
            <img src='https://media.istockphoto.com/photos/dog-and-cat-eating-pizza-picture-id1153896890?k=20&m=1153896890&s=612x612&w=0&h=MQurVtot6xx-zzs-cbtWG7TLvi1OPBjO8LppnjWNKFk=' />
            <p><i>Our founders</i></p>
            <p>Back in 1929 our founders, Pops the dog and Pammy the cat, wanted to support the community during the Great Depression.
              They came up with original recipes of pizza to put a smile on <strong>everyone's</strong> face. Starting from the 
              <em>"Over The Rainbow"</em> pizza to the world famous <em>"Pepperoni"</em> pizza with only one pepperoni. We have conitinued to carry on
              their legacy to keep giving back with one amazing pizza at a time.
            </p>
            </div>
            </div>
          </div>
        </Route>
        <Route path='/cart'>
          <PizzaCart />
        </Route>
        <Route path='/menu'>
          <PizzaList />
        </Route>
        <Route path='/checkout'>
          <CustomerForm setNewOrder={setNewOrder}/>
        </Route>
        <Route path='/thankyou'>
          <ThankYou newOrder={newOrder}/>
        </Route>
      <Route path='/Admin'>
      <Admin newOrder={newOrder} setNewOrder={setNewOrder}/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
