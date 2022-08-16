import { render, cleanup, fireEvent, getByTestId, waitFor,    } from '@testing-library/react'
import CreateCustomer from './CreateCustomer'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {configureStore} from '../redux/configureStore';
import axiosMock from 'axios';

const store= configureStore

afterEach(cleanup)

describe("Create Customer", () => {
    it (" should render correctly ", () => {
           const {asFragment} =  render(<Provider store={store}><CreateCustomer /></Provider>)
           expect(asFragment(<CreateCustomer />)).toMatchSnapshot();
    })
})

it (" should have initial first name as empty string ", () => {
    const {getByTestId} =  render(<Provider store={store}><CreateCustomer /></Provider>)
    expect(getByTestId('fname')).toHaveDisplayValue("");
})
it (" should have initial last name as empty string ", () => {
    const {getByTestId} =  render(<Provider store={store}><CreateCustomer /></Provider>)
    expect(getByTestId('fname')).toHaveDisplayValue("");
})
it (" should have initial city as empty string ", () => {
    const {getByTestId} =  render(<Provider store={store}><CreateCustomer /></Provider>)
    expect(getByTestId('fname')).toHaveTextContent("");
})
it (" should not have button disabled initially ", () => {
    const {getByTestId} =  render(<Provider store={store}><CreateCustomer /></Provider>)
    expect(getByTestId('addButton')).not.toBeDisabled();
})

it('tests the input text value after onChange event ', () => {
    const { getByTestId } = render(<Provider store={store}><CreateCustomer /></Provider>); 
    fireEvent.change(getByTestId('fname'), {target:{value:'new val'}})
    expect(getByTestId('fname')).toHaveValue('new val')
  });

 jest.mock('axios')

// it('should load and display the data', async () => {
//   const url = 'http://localhost:3000/customres'
//   const { getByTestId, asFragment } = render(<Provider store={store}><CreateCustomer /></Provider>)

//   axiosMock.get("http://localhost:8080/customers").mockResolvedValue({
//     data: { greeting: 'hello there' }, //provide mocked data here
//   })

//   fireEvent.click(getByTestId('fetch-data'))

//   const greetingData = await waitFor(() => getByTestId('show-data'))

//   expect(axiosMock.get).toHaveBeenCalledTimes(1)
//   expect(axiosMock.get).toHaveBeenCalledWith(url)
//   expect(greetingData).toHaveTextContent('hello there')
// })