import axios from "axios";
import { ORDER_FETCH } from "./types";

export const ordersFetch = () => {

    return dispatch => {
        axios.get("http://localhost:3001/orders").then(res => {
            dispatch({ type: ORDER_FETCH, payload: res.data })
        });
    }
}

export const ordersDelete = id => {
    return dispatch => {
        axios.delete("http://localhost:3001/orders/" + id).then(res => {
            axios.get("http://localhost:3001/orders").then(
                res => {
                    dispatch({ type: ORDER_FETCH, payload: res.data })
                }
            )
        })
    }
}

export const editOrder = id => {
    return dispatch => {
        axios.delete("http://localhost:3001/orders/"+id).then(res => {
            
        });
    }
}