import { render, screen } from '@testing-library/react'
import React from 'react'
import DisplayCustomers from './DisplayCustomers'

describe("Display Customers", () => {
    it (" should render correctly ", () => {
           const {asFragment} =  render(<DisplayCustomers />)
           expect(asFragment(<DisplayCustomers />)).toMatchSnapshot();
    })

    it (" should have h2 with text customers", () => {
        render(<DisplayCustomers />)
        //const heading = 
        screen.getByText(/customers/i)
        //expect(heading).toBeInTheDocument();
    })
})