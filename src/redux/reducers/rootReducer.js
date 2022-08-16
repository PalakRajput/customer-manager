import { combineReducers } from "redux";
import createCustomerReducer from "./CustomerReducer";
import createOrderReducer from "./OrderReducer";

const rootReducer = combineReducers({
        customer: createCustomerReducer,
        order: createOrderReducer
    })


export default rootReducer;