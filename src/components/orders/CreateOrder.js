import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/actions/OrderActions';
import { useParams } from 'react-router-dom'
import { getCustomerAction } from '../../redux/actions/CustomerActions';
import {Navigate} from 'react-router-dom'

const CreateOrder = () => {
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0.0);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const params = useParams()
    const successMessage = useSelector(state => state.order.successMessage)
    const handleClick = () => {
        if ((productName !== "" && productName !== null) && (quantity !== 0) && (unitPrice !== 0.0)) {
            setError("")
            dispatch(createOrder({ pname: productName, quantity, unitPrice, cid:params.cid }, createOrderSuccess));
            <Navigate to={`/orders/${params.id}`} />
        } else {
            setError("Please enter data in all fields.")
        }
    }
    const createOrderSuccess = () => {
        //<Navigate to={`/orders/${params.id}`} />
        dispatch(getCustomerAction())
        
    }
    return (
        <div className='container' >
            <div className='row' style={{marginTop:'50px'}}>
                <div className='col-2'>
                    <label htmlFor='pname' style={{ fontWeight: 'bold' }}> Product Name: </label>
                    <input data-testid="pname" type="text" id="pname" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="First Name" style={{height:'40px', borderRadius:'5px'}}></input>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <label htmlFor='quantity' style={{ fontWeight: 'bold' }}> Quantity: </label>
                    <input data-testid="quantity" type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Last Name" style={{height:'40px', borderRadius:'5px'}}></input>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <label htmlFor='unitPrice' style={{ fontWeight: 'bold' }}> Unit Price: </label>
                    <input data-testid="unitPrice" type="text" id="unitPrice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} placeholder="City" style={{height:'40px', borderRadius:'5px'}}></input>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <br/>
                    <button data-testid="addButton" disabled={!productName || !quantity || !unitPrice} className='btn btn-primary' style={{ width: 'max-content', alignItems: 'center', height:'40px' }} onClick={handleClick}> Add Order </button>
                </div>
            </div>

            <br />
            {error ? <span className='text-danger font-weight-bold'>{error}</span> : null}
            {successMessage ? <span className='text-success font-weight-bold'>{successMessage}</span> : null}
        </div>
    )

}

export default CreateOrder;