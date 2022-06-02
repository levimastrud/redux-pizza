import { useSelector, useDispatch } from 'react-redux';

function PizzaListItem({ pizza }) {
    const store = useSelector(store => store.pizzaReducer);
    const dispatch = useDispatch();

    const addPizza = () => {
        console.log('Adding to cart', pizza)
        dispatch({type: 'ADD', payload: pizza})
    }

    return (
        <>
            <table id='pizza-table'>
                <thead>
                    <tr>
                        <th>{pizza.name}</th>
                    </tr>
                </thead>
                <tbody id='pizza-info'>
                    <tr>
                        <td className='description'>{pizza.description}</td>
                    </tr>
                    <tr>
                        <td><img src={pizza.image_path}></img></td>
                    </tr>
                    <tr>
                        <td>${Number(pizza.price).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick = {addPizza}>Add to cart</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default PizzaListItem;