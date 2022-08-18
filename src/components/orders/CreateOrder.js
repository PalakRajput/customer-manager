import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createOrder } from '../../redux/actions/OrderActions';
import { useParams, useNavigate } from 'react-router-dom'
import { getCustomerAction } from '../../redux/actions/CustomerActions';
import './index.css'

const CreateOrder = () => {
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0.0);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const params = useParams()
    //const successMessage = useSelector(state => state.order.successMessage)
    let navigate = useNavigate()
    const handleClick = () => {
        if ((productName !== "" && productName !== null) && (quantity !== 0) && (unitPrice !== 0.0)) {
            setError("")
            dispatch(createOrder({ pname: productName, quantity, unitPrice, cid:params.cid }, createOrderSuccess));
            
        } else {
            setError("Please enter data in all fields.")
        }
    }
    const createOrderSuccess = () => {
        navigate(`/orders/${params.cid}`)
        dispatch(getCustomerAction())
        
    }
    return (
        <div className='container' >
            <div className='row' style={{marginTop:'50px'}}>
                <div className='col-2'>
                    <label htmlFor='pname' className='inputLabel'> Product Name: </label>
                    <input data-testid="pname" type="text" id="pname" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" className='inputElement'></input>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <label htmlFor='quantity' className='inputLabel'> Quantity: </label>
                    <input data-testid="quantity" type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} className='inputElement'></input>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <label htmlFor='unitPrice' className='inputLabel'> Unit Price: </label>
                    <input data-testid="unitPrice" type="text" id="unitPrice" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} className='inputElement'></input>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <br/>
                    <button data-testid="addButton" disabled={!productName || !quantity || !unitPrice} className='btn btn-primary addOrderButton'  onClick={handleClick}> Add Order </button>
                </div>
            </div>

            <br />
            {error ? <span className='text-danger font-weight-bold'>{error}</span> : null}
            {/* {successMessage ? <span className='text-success font-weight-bold'>{successMessage}</span> : null} */}
        </div>
    )

}

export default CreateOrder;
