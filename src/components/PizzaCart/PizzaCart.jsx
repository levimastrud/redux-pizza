import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';


function PizzaCart() {
    
    const store = useSelector(store => store.cart);
    const history = useHistory();

    console.log('getting total',store);
    console.log('in cart', store);

    const dispatch = useDispatch();

    let total = 0;
    
    const goToForm = () => {
        history.push('/checkout');
        dispatch({type: 'TOTALIZE', payload: total});
    }

    return (
        <div>
            {store.map((pizza) => {
                return (
                    
                        <div className = "cart" key={pizza.id}>
                            <h3 >{pizza.name}</h3>
                            <img src={pizza.image_path}></img>
                        <span id='updated-price'>{total += Number(pizza.price)}</span>
                        </div>
                    
                )
            })}
            {/* <CustomerForm total={total}/> */}
            <h3 className='cart'>Total is:${total.toFixed(2)}</h3>
            <button className = 'cart'onClick={goToForm}>Checkout</button>
        </div>   
    )
}

export default PizzaCart;