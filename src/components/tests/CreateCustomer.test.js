import { render, cleanup, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import CreateCustomer from '../customer/CreateCustomer';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({
    customer:{
        customers:[],
        successMessage: "",
        error:""
    }
})

afterEach(cleanup)

describe("Create Customer", () => {
    it (" should render correctly ", () => {
           const {asFragment} =  render(<MemoryRouter><Provider store={store}><CreateCustomer /></Provider></MemoryRouter>)
           expect(asFragment(<CreateCustomer />)).toMatchSnapshot();
    })
})

it (" should have initial first name as empty string ", () => {
    const {getByTestId} =  render(<MemoryRouter><Provider store={store}><CreateCustomer /></Provider></MemoryRouter>)
    expect(getByTestId('fname')).toHaveDisplayValue("");
})
it (" should have initial last name as empty string ", () => {
    const {getByTestId} =  render(<MemoryRouter><Provider store={store}><CreateCustomer /></Provider></MemoryRouter>)
    expect(getByTestId('fname')).toHaveDisplayValue("");
})
it (" should have initial city as empty string ", () => {
    const {getByTestId} =  render(<MemoryRouter><Provider store={store}><CreateCustomer /></Provider></MemoryRouter>)
    expect(getByTestId('fname')).toHaveTextContent("");
})
it (" should not have button disabled initially ", () => {
    const {getByTestId} =  render(<MemoryRouter><Provider store={store}><CreateCustomer /></Provider></MemoryRouter>)
    expect(getByTestId('addButton')).toBeDisabled();
})

// it('tests the input text value after onChange event ', () => {
//     const {getByPlaceholderText} = render(<MemoryRouter><Provider store={store}><CreateCustomer /></Provider></MemoryRouter>); 
//     // fireEvent.change(getByTestId('fname'), {target:{value:'new val'}})
//     const input = getByPlaceholderText('First Name');
//     userEvent.type(input, "new val")
//     expect(input).toHaveValue("new val")
//   });