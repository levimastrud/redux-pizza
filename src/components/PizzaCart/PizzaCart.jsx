import { useSelector } from 'react-redux';

function PizzaCart() {
    const store = useSelector(store => store.cart);
    console.log('in cart', store);

    let total = 0;

    return (
        <div>
            {store.map((pizza) => {
                return (
                    <>
                        <div key={pizza.id}>
                            <h3 >{pizza.name}</h3>
                            <img src={pizza.image_path}></img>
                        </div>
                    </>
                )
            })}
             <button>Checkout</button>
        </div>   
    )
}

export default PizzaCart;