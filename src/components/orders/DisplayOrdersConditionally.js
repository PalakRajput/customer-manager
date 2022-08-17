import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const DisplayOrdersConditionally = ({customerProp}) => {
    return (
        <>
        <div className='container'>
            <br />
            {customerProp.map(customer => (
                
                <div className='row' style={{ marginLeft: '20%' }} key={customer.id}>
                    
                    {customer.ordersList.length > 0 ?
                        <div>
                            <span style={{ fontWeight: 'bold', color: 'navy' }}>{customer.fname + " " + customer.lname}</span>
                            <table className='table-bordered' >
                                <thead style={{ backgroundColor: 'black', color: 'white' }}>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Unit Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody className='table-striped' style={{ backgroundColor: 'black', color: 'white' }}>
                                    
                                    {customer.ordersList.map(order => (
                                        <tr key={order.oid}>
                                            <td>{order.pname}</td>
                                            <td>{order.quantity}</td>
                                            <td>{order.unitPrice}</td>
                                            <td>${order.quantity * order.unitPrice}</td>
                                        </tr>
                                    ))}
                                    <tr ><td colSpan="4" >Total: ${customer.ordersList.reduce((prev, curr) => prev += (curr.quantity*curr.unitPrice),+0)}</td></tr>
                                    {/* {params.id !== undefined ? <tr><a>Add Orders</a></tr> : null} */}
                                </tbody>
                            </table>
                            {/* {customerProp.length === 0 ? <Link to={`/addOrder/${customerProp[0].id}`} role='button' className='btn btn-primary btn-sm' id='orderButton' >Add Orders for {customerProp[0].fname+ " " +customerProp[0].lname}</Link> : null} */}
                            <br /><br />
                        </div> :  (customerProp.length === 1 ? <Link to={`/addOrder/${customerProp[0].id}`} role='button' className='btn btn-primary btn-sm' id='orderButton' >Add Orders for {customerProp[0].fname+ " " +customerProp[0].lname}</Link> : null)
}
                </div>
            ))}


        </div>

    </>
    )
}

export default DisplayOrdersConditionally;