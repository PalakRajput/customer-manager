import { render, screen } from '@testing-library/react'
import React from 'react'
import DisplayOrdersConditionally from '../orders/DisplayOrdersConditionally';

describe("Display Customers", () => {
    it (" should render correctly ", () => {
        const customerProps = [
            {id:1, fname:"John", lname:"Doe", city:"LA", ordersList:[
                {oid:1, pname:"Speaker", quantity:1, unitPrice: 20},
                {oid:2, pname:"Bluetooth Device", quantity:1, unitPrice: 10}
            ]}
        ]
           const {asFragment} =  render(<DisplayOrdersConditionally customerProp={customerProps}/>)
           expect(asFragment(<DisplayOrdersConditionally />)).toMatchSnapshot();
    })

})