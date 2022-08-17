import axios from "axios"
import { CREATE_ORDER_SUCCESS, ORDER_FAILURE } from "./actionTypes"


export function createOrder(requestBody, onSuccess){
    return function (dispatch){
        axios.post("http://localhost:8080/orders/", requestBody, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => {
            onSuccess()
            dispatch({
                type: CREATE_ORDER_SUCCESS,
                payload: response.data
            })
        }).catch(error => {
            dispatch({
                type: ORDER_FAILURE,
                payload: error
            })
        })
    }
}