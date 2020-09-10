import axios from "axios";
import { PRODUCT_FETCH, PRODUCT_FETCH_ONE, PRODUCT_CREATE, PRODUCT_UPDATE } from "./types";

export const productsFetch = () => {
    return dispatch => {
        axios.get("http://localhost:3001/products").then(res => {
            dispatch({ type: PRODUCT_FETCH, payload: res.data })
        });
    }
}

export const productFetchOne = id => {
    return dispatch => {
        axios.get("http://localhost:3001/products/" + id).then(res => {
            dispatch({ type: PRODUCT_FETCH_ONE, payload: res.data })
        });
    }
}

export const productCreate = values => {
    return dispatch => {
        axios.post("http://localhost:3001/products", values).then(res => {
            dispatch({ type: PRODUCT_CREATE })
        });
    }
}

export const productUpdate = (id, values) => {
    return dispatch => {
        axios.put("http://localhost:3001/products/" + id, values).then(res => {
            dispatch({ type: PRODUCT_UPDATE })
        });
    }
}

export const productsDelete = id => {
    return dispatch => {
        console.log("Action" + id)
        axios.delete("http://localhost:3001/products/" + id).then(res => {
            axios.get("http://localhost:3001/products").then(
                res => {
                    dispatch({ type: PRODUCT_FETCH, payload: res.data })
                }
            )
        })
    }
}
