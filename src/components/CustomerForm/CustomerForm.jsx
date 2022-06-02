import { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CustomerForm() {

    const history = useHistory();

    const [newOrder, setNewOrder] = useState([])
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    const getOrders = () => {
        axios.get('/api/order/')
            .then(response => {
                console.log('In GET', response.data);
                setNewOrder(response.data)
            }).catch(err => console.log('In GET', err));
    }

    useEffect(() => {
        getOrders();
    }, [])

    let total = useSelector(store => store.total)
    const store = useSelector(store => store.cart)
    const addOrder = (e) => {
        let order = {
            customer_name: name,
            street_address: address,
            city: city,
            zip: zip,
            total: total,
            type: type,
            pizzas: [{
                order_id: store.id,
                quantity: 1
            }, {
                pizza_id: store.id,
                quantity: 2
            }]
        }
        axios.post('/api/order/', order)
            .then(reponse => {
                console.log('In POST order');
                getOrders();
            }).catch(err => console.log('ERROR in POST order', err));


            setTimeout(() => history.push('/thankyou'), 1000)
    }

    return (
        <>
            <form onSubmit={addOrder} className='checkout'>
                <h3>Please enter your information</h3>
                <div id='customerForm'>
                    <div className='inputs'>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"></input>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Street Adress"></input>
                        <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City"></input>
                        <input value={zip} onChange={(e) => setZip(e.target.value)} placeholder="Zip"></input>
                    </div>
                    <br />
                    <input type='radio' value={type} name='method' id='delivery' onChange={(e) => setType('delivery')}></input>
                    <label>Delivery</label>
                    <input type='radio' value={type} name='method' id='pick-up' onChange={(e) => setType('pick-up')}></input>
                    <label>Pick up</label>
                    <br />
                </div>
                <button >Submit</button>
            </form>
        </>
    )
}

export default CustomerForm;