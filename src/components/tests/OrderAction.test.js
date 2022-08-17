import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
const axios = require("axios");
import mockAxios from 'axios';
import { waitFor } from '@testing-library/react'
import { CREATE_ORDER_SUCCESS } from '../../redux/actions/actionTypes';
import { createOrder } from '../../redux/actions/OrderActions';
import createOrderReducer from '../../redux/reducers/OrderReducer';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

jest.mock("axios")

it( " creates order ", async () => {
    const store = mockStore()
    const initialState = {
        orders: [],
        error: "",
        successMessage: ""
    }
    //data = {pname:"Speaker", quantity:1, unitPrice:10.0, cid:1}
    mockAxios.post.mockImplementation(() => Promise.resolve({data:"Order created successfully"}))
    const expectedActions = {
        type: CREATE_ORDER_SUCCESS,
        payload: "Order created successfully"
    }
    const onSuccess = () => jest.fn()
    await store.dispatch(createOrder({pname:"Speaker", quantity:1, unitPrice:10.0, cid:1},onSuccess))
    const action = store.getActions()
    expect(axios.post).toHaveBeenCalledWith("http://localhost:8080/orders/", {pname:"Speaker", quantity:1, unitPrice:10.0, cid:1}, {"headers": {"Access-Control-Allow-Origin": "*"}})
    expect(action[0]).toEqual(expectedActions)
    const newState = createOrderReducer(initialState, action[0])
    expect(axios.post).toHaveBeenCalledTimes(1)
    expect(newState.successMessage).toBe("Order created successfully")
})