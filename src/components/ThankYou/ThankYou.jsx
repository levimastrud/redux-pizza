import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ThankYou() {

    let store = useSelector(store => store.cart);
    let total = useSelector(store => store.total);
    const dispatch = useDispatch();
    const history = useHistory();
    const clickHandler = () =>{
        dispatch({type: 'CLEAR'});
        history.push('/');
    }

    return (
        <>
            <div className='receipt'>
                <h1>Thank you for your order!</h1>
                <h3>Order Details:</h3>
                <hr />
                <div>
                    {store.map((pizza) => {
                        return (

                            <div key={pizza.id}>
                                <h3 >{pizza.name}</h3>
                                <h3>{pizza.price}</h3>
                            </div>

                        )
                    })}
                    <hr />
                    <h3>Total is:${total.toFixed(2)}</h3>
                </div>
                <button onClick={() => clickHandler()}>Back to home</button>
            </div>
        </>
    )
}

export default ThankYou;