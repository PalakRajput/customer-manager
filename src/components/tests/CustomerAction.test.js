import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { CREATE_CUSTOMER_SUCCESS, GET_CUSTOMER_SUCCESS } from '../../redux/actions/actionTypes'
import { createCustomerAction, getCustomerAction, updateCustomer } from '../../redux/actions/CustomerActions'
const axios = require("axios");
import mockAxios from 'axios';
import { waitFor } from '@testing-library/react'


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock("axios")

it('mocks the getAllCustomers api call and return the mocked value ', async () => {

    const store = mockStore()
    mockAxios.get.mockImplementation(() => Promise.resolve({
        data: [
            {
                custId: 1, fname: "John", lname: "Doe", city: "Seattle", ordersList: [
                    { oid: 1, pname: "Pen", quantity: 5, unitPrice: 15.3 },
                    { oid: 2, pname: "Pen", quantity: 5, unitPrice: 15.3 }
                ]
            }
        ]
    }))
    const expectedActions = {
        type: GET_CUSTOMER_SUCCESS,
        payload: [
            {
                custId: 1, fname: "John", lname: "Doe", city: "Seattle", ordersList: [
                    { oid: 1, pname: "Pen", quantity: 5, unitPrice: 15.3 },
                    { oid: 2, pname: "Pen", quantity: 5, unitPrice: 15.3 }
                ]
            }
        ]
    }
    await store.dispatch(getCustomerAction());
    const action = store.getActions()

    expect(axios.get).toHaveBeenCalledWith("http://localhost:8080/customers/", {
        "headers": {
            "Access-Control-Allow-Origin": "*",
        },
    })
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(action[0]).toEqual(expectedActions)

    //use below for writing test without await
    // waitFor(() =>{
    //     expect(axios.get).toHaveBeenCalledWith("http://localhost:8080/customers/", {
    //        "headers":  {
    //          "Access-Control-Allow-Origin": "*",
    //        },
    //      })
    //     expect(axios.get).toHaveBeenCalledTimes(1)
    //     expect(store.getActions()[0]).toEqual(expectedActions)
    // })

})


it('mocks the createCustomer api call and return the mocked value ', async () => {
    const store = mockStore()
    mockAxios.post.mockImplementation(() => Promise.resolve({
        data: "Customer created successfully"
    }))
    //axios.post.mockResolvedValue({data:"Customer created successfully"})
    const expectedActions = {
        type: CREATE_CUSTOMER_SUCCESS,
        payload: "Customer created successfully"
    }
    await store.dispatch(createCustomerAction({"fname":"John","lname":"Doe","city":"NY"}));
    const action = store.getActions()
    expect(axios.post).toHaveBeenCalledWith("http://localhost:8080/customers/", {"fname":"John","lname":"Doe","city":"NY"},{
        "headers": {
            "Access-Control-Allow-Origin": "*",
        },
    })
    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(action[0]).toEqual(expectedActions)
})

it('mocks the updateCustomer api call and return the mocked value ', async () => {

    const store = mockStore()
    mockAxios.put.mockImplementation(() => Promise.resolve({
        data: "Customer updated successfully"
    }))
    const expectedActions = {
        type: CREATE_CUSTOMER_SUCCESS,
        payload: "Customer updated successfully"
    }
    const successCallback = jest.fn()
    
    await store.dispatch(updateCustomer({fname: "John", lname: "Doe", city: "NY", id: 1},  successCallback));
    const action = store.getActions()
    
    expect(axios.put).toHaveBeenCalledWith("http://localhost:8080/customers/", {fname: "John", lname: "Doe", city: "NY", id: 1}, {
        "headers": {
            "Access-Control-Allow-Origin": "*",
        },
    })
    expect(axios.put).toHaveBeenCalledTimes(1)
    expect(action[0]).toEqual(expectedActions)
    expect(successCallback).toHaveBeenCalledTimes(1);
})