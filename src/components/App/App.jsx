import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList';
import PizzaCart from '../PizzaCart/PizzaCart';
import CustomerForm from '../CustomerForm/CustomerForm';
import ThankYou from '../ThankYou/ThankYou';

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
            <img src='https://media.istockphoto.com/photos/dog-and-cat-eating-pizza-picture-id1153896890?k=20&m=1153896890&s=612x612&w=0&h=MQurVtot6xx-zzs-cbtWG7TLvi1OPBjO8LppnjWNKFk=' />
            <p>Our founders</p>
          </div>
        </Route>
        <Route path='/cart'>
          <PizzaCart />
        </Route>
        <Route path='/menu'>
          <PizzaList />
        </Route>
        <Route path='/checkout'>
          <CustomerForm />
        </Route>
        <Route path='/thankyou'>
          <ThankYou />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
