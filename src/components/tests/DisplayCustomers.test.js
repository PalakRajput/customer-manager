import { render, screen } from '@testing-library/react'
import React from 'react'
import DisplayCustomers from '../customer/DisplayCustomers'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({
    customer:{
        customers:[],
        successMessage: "",
        error:""
    }
})

describe("Display Customers", () => {
    it (" should render correctly ", () => {
           const {asFragment} =  render(<Provider store={store}><DisplayCustomers /></Provider>)
           expect(asFragment(<DisplayCustomers />)).toMatchSnapshot();
    })
})