import { CREATE_ORDER_SUCCESS, ORDER_FAILURE } from "../actions/actionTypes"

const initialState = {
    orders: [],
    error: "",
    successMessage: ""
}

export default function createOrderReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_ORDER_SUCCESS:
            return {
                ...state, successMessage: action.payload
            }
        case ORDER_FAILURE:
            return {
                ...state, error: action.payload
            }
        default: return {
            ...state
        }
    }
} 