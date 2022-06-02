import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';


const pizzaReducer = (state = [], action) => {

    console.log('We are in the pizza reducer:', state, action);

    if (action.type === 'GET_PIZZA') {
        return action.payload;
    }
    return state
}

const cart = (state = [], action) => {
    if (action.type === 'ADD') {
        return [...state, action.payload]
    } else if (action.type === 'CLEAR') {
        return [];
    }
    return state;
}

const total = (state = 0, action) => {
    if(action.type === 'TOTALIZE'){
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        cart,
        total
    }),
    applyMiddleware(logger)
)


ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
