import { useEffect } from 'react';
import axios from 'axios';

function Admin({newOrder, setNewOrder}){

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
    
    return(
        <table className='customer-table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Order Total</th>
                    <th>Time Order Was Placed</th>
                </tr>
            </thead>
            <tbody className='customer-info'>
                {newOrder.map((order) =>{
                    return (
                    <tr key={order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.street_address}</td>
                        <td>{order.city}</td>
                        <td>{order.zip}</td>
                        <td>{order.total}</td>
                        <td>{order.time}</td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    );
}

export default Admin
