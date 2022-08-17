import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/';
import { deleteCustomer, getCustomerAction } from '../../redux/actions/CustomerActions';

const DisplayCustomers = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customer.customers);
    //const successMessage = useSelector(state => state.customer.successMessage)
    useEffect(() => {
            dispatch(getCustomerAction())
    },[])
    const handleDeleteClick = (id) => {
        dispatch(deleteCustomer(id))
    }
    return (
        <>
            <div style={{margin:'20px'}}>
                <div className='row'>

                    {customers.length !==0 ? (customers.map(customer => (
                        <div className='col md-2' key={customer.id}>
                            <div className='card' style={{ boxShadow: '10px 10px 5px gray' }}>
                                <div className='card-body' style={{ background: 'linear-gradient(270deg, #c5e6ec 0%, rgb(248 212 248) 100%)' }}>
                                    <div className='card-title' style={{ fontWeight: 'bold' }}><Link to='/' state={{customer}}>{customer.fname + " " + customer.lname}</Link></div>
                                    {customer.city}
                                    <br />
                                    <Link to={`/orders/${customer.id}`} style={{ fontWeight: 'bold' }}>View {customer.ordersList.length} Orders</Link>
                                </div>
                                <div className='card-footer'>
                                    <button className='btn btn-danger btn-small' onClick={() => handleDeleteClick(customer.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                    ) : (
                        <div>No Customers to Display. Please add customers</div>
                    )
                }


                </div>
            </div>
        </>
    )
}
export default DisplayCustomers;