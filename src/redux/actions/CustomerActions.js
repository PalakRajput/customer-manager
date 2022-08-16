import axios from "axios";
import { GET_CUSTOMER_SUCCESS, CUSTOMER_FAILURE, CREATE_CUSTOMER_SUCCESS, DELETE_CUSTOMER } from "./actionTypes";



export function getCustomerAction() {
    return function (dispatch) {
        axios.get("http://localhost:8080/customers/", {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => {
                dispatch({
                    type: GET_CUSTOMER_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: CUSTOMER_FAILURE,
                    payload: error
                })
            })
    }
}

export function createCustomerAction(requestBody) {
    return function (dispatch) {
        axios.post("http://localhost:8080/customers/", requestBody, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(response => {
                dispatch({
                    type: CREATE_CUSTOMER_SUCCESS,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: CUSTOMER_FAILURE,
                    payload: error
                })
            })
    }
}

export function deleteCustomer(id){
    return function(dispatch){
        axios.delete("http://localhost:8080/customers/"+id,{
            headers:{
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => {
            dispatch({
                type:DELETE_CUSTOMER,
                payload: response.data,
                id
            })
        }).catch(error => {
            dispatch({
                type: CUSTOMER_FAILURE,
                payload: error
            })
        })
    }
}