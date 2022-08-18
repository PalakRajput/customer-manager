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
    }, [dispatch])
    const handleDeleteClick = (id) => {
        dispatch(deleteCustomer(id))
    }
    return (
        <>
            <div style={{ margin: '20px' }}>


                {customers.length !== 0 ? (customers.map(customer => (
                    <React.Fragment key={customer.id}>
                        <div className='row'>
                            <div className='col md-4 offset-3' >
                                <div className='card cardShadow' >
                                    <div className='card-body cardColor' >
                                        <div className='card-title' ><Link to='/' state={{ customer }}>{customer.fname + " " + customer.lname}</Link></div>
                                        {customer.city}
                                        <br />
                                        <Link to={`/orders/${customer.id}`} >View {customer.ordersList.length} Orders</Link>
                                    </div>
                                    <div className='card-footer'>
                                        <button className='btn btn-danger btn-small' onClick={() => handleDeleteClick(customer.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                    </React.Fragment>
                ))
                ) : (
                    <div>No Customers to Display. Please add customers</div>
                )
                }



            </div>
            {/* <ToastContainer autoClose={2000}/> */}
        </>
    )
}
export default DisplayCustomers;
