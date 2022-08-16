
import { getCustomerAction } from '../../redux/actions/getCustomerActions'
const axios = require("axios")

jest.mock('axios');

it('mocks the getAllCustomers api call and return the mocked value ', () => {
    // axios.get.mockResolvedValue({
    //     data:[
    //         {custId:1, fname:"John", lname:"Doe", city:"Seattle", ordersList:[
    //             {oid:1, pname:"Pen", quantity: 5, unitPrice: 15.3},
    //             {oid:2, pname:"Pen", quantity: 5, unitPrice: 15.3}
    //         ]}
    //     ]
    // })
    const mockRes  =  [
                {custId:1, fname:"John", lname:"Doe", city:"Seattle", ordersList:[
                    {oid:1, pname:"Pen", quantity: 5, unitPrice: 15.3},
                    {oid:2, pname:"Pen", quantity: 5, unitPrice: 15.3}
                ]}
    ]
    axios.get = jest.fn(() => mockRes)
    axios.get("/")
    expect(axios.get).toHaveReturnedWith(mockRes)
})