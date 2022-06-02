import axios from 'react';

function Admin({newOrder}){
    
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {newOrder.map(order =>{
                    <tr>
                        <td>{order.name}</td>
                        <td>{order.time}</td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default Admin
