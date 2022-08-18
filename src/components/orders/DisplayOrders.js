
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomerAction } from '../../redux/actions/CustomerActions';
import { useParams } from 'react-router-dom';
import DisplayOrdersConditionally from './DisplayOrdersConditionally';



const DisplayOrders = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state) => state.customer.customers);

    const params = useParams();
    useEffect(() => {
        //if (customers.length === 0) {
            dispatch(getCustomerAction())
       // }
    },[dispatch])
    return (
        
            customers.length !== 0 ? // eslint-disable-next-line
            params.id !== undefined ? (customers.length !== 0 ?<DisplayOrdersConditionally customerProp={[customers.find(c => {  
                if (c.id == params.id) {
                    return [c]; 
                }
    
            })]} /> : null)
                : <DisplayOrdersConditionally customerProp={customers} />
                : <div>No orders to display. Please add customers and orders for them.</div>
        
    )
}

export default DisplayOrders;