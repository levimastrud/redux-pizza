import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import axios from 'axios';
import PizzaListItem from '../PizzaListItem/PizzaListItem';


function PizzaList() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.pizzaReducer);

    useEffect(() => {
        fetchPizzaList();
    }, [])

    const fetchPizzaList = () => {
        axios.get('/api/pizza/menu')
            .then(response => {
                dispatch({ type: `GET_PIZZA`, payload: response.data });
            })
            .catch(error => {
                console.log(`Could not get pizzas at this time. Try again later.`, error);
            })
    }

    return (
        <div>
            {store.map((pizza) => {
                return (
                    <PizzaListItem pizza={pizza}
                    key={pizza.id}
                    />
                )
            })}
        </div>
    )
}

export default PizzaList;