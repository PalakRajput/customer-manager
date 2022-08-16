import { render, screen } from '@testing-library/react'
import DisplayOrders from './DisplayOrders'
import React from 'react'

describe("Display orders ", () => {
    it (" should render correctly ", () => {
           const {asFragment} =  render(<DisplayOrders />)
           expect(asFragment(<DisplayOrders />)).toMatchSnapshot();
    })

    it (" should have h2 with text Orders ", () => {
        render(<DisplayOrders />)
        const heading = screen.getByText(/orders/i)
        expect(heading).toBeInTheDocument();
    })
})