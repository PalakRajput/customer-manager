import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createCustomerAction, getCustomerAction, updateCustomer } from '../../redux/actions/CustomerActions';
import { useLocation } from 'react-router-dom';

const CreateCustomer = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    const successMessage = useSelector(state => state.customer.successMessage)
     
    useEffect(() => {
        //for updating the customer
        if(location.state !== null){
            const {customer} = location.state
            setFirstName(customer.fname)
            setLastName(customer.lname)
            setCity(customer.city)
        }else{
            setFirstName("")
            setLastName("")
            setCity("")
        }
    },[location.state])
    const handleClick = (e) => {
        if ((firstName !== "" && firstName !== null) && (lastName !== "" && lastName !== null) && (city !== "" && city !== null)) {
            setError("")
            if(location.state !== null){
                //action to update customer
                dispatch(updateCustomer({fname: firstName, lname: lastName, city, id: location.state.id}, updateCustomerSuccess))
            }else{
                dispatch(createCustomerAction({ fname: firstName, lname: lastName, city }, updateCustomerSuccess))
            }
            setFirstName("");
            setLastName("");
            setCity("");
        } else {
            setError("Please enter data in all fields.")
        }
    }
    const updateCustomerSuccess = () => {
        dispatch(getCustomerAction())
    }
    return (
        <div className='container' >
            <div className='row' style={{ marginTop: '50px' }}>
                <div className='col-2'>
                    <label htmlFor='fname' style={{ fontWeight: 'bold' }}> First Name: </label>
                    <input data-testid="fname" type="text" id="fname" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" style={{ height: '40px', borderRadius: '5px' }}></input>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <label htmlFor='lname' style={{ fontWeight: 'bold' }}> Last Name: </label>
                    <input data-testid="lname" type="text" id="lname" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" style={{ height: '40px', borderRadius: '5px' }}></input>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <label htmlFor='city' style={{ fontWeight: 'bold' }}> City: </label>
                    <input data-testid="city" type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" style={{ height: '40px', borderRadius: '5px' }}></input>
                </div>
                <div className='col-1'></div>
                <div className='col-2'>
                    <br />
                    <button data-testid="addButton" disabled={!firstName || !lastName || !city} className='btn btn-primary' style={{ width: 'max-content', alignItems: 'center', height: '40px' }} onClick={handleClick}>{location.state !== null ? 'Update Customer' : 'Add Customer'}</button>
                </div>
            </div>

            <br />
            {error ? <span className='text-danger font-weight-bold'>{error}</span> : null}
            {/* react-toastify to hide the message after 2secs */}
            {successMessage ? <span className='text-success font-weight-bold'>{successMessage}</span> : null}
        </div>
    )

}

export default CreateCustomer;