import { CREATE_CUSTOMER_SUCCESS, CUSTOMER_FAILURE, DELETE_CUSTOMER, GET_CUSTOMER_SUCCESS } from "../actions/actionTypes";


const initialState = {
    customers: [],
    error: "",
    successMessage: ""
}

export default function createCustomerReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CUSTOMER_SUCCESS:
            return {
                ...state, successMessage: action.payload
            }
        case GET_CUSTOMER_SUCCESS:
            return {
                ...state, customers: action.payload
            }
        case CUSTOMER_FAILURE:
            return {
                ...state, error: action.payload
            }
        case DELETE_CUSTOMER:
            return {
                ...state, successMessage: action.payload, customers: [...state.customers.filter(elem => elem.id !== action.id)]
            }
        default: return {
            ...state
        }
    }
} 