import { PRODUCT_FETCH, PRODUCT_FETCH_ONE, PRODUCT_CREATE, PRODUCT_UPDATE } from "../actions/types";

export default function (state = [], action) {
    switch (action.type) {
        case PRODUCT_FETCH:
            return action.payload
        case PRODUCT_FETCH_ONE:
            return action.payload
        case PRODUCT_CREATE:
            return { saved: true, msg: "Add Success" };
        case PRODUCT_UPDATE:
            return { ...state,saved: true, msg: "Saved Success" }
        default:
            return state;

    }
}