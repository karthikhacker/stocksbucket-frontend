import { ACCOUNT_LOADING, CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_SUCCESS } from "../actions/types";

const initialState = {
    account: {},
    accLoading: false,
    error: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ACCOUNT_LOADING:
            return {
                ...state,
                accLoading: true
            }
        case CREATE_ACCOUNT_SUCCESS:
            return {
                ...state,
                account: action.payload,
                accLoading: false,
                error: null
            }
        case CREATE_ACCOUNT_FAILURE:
            return {
                ...state,
                error: action.payload,
                accLoading: false
            }
        default:
            return state;
    }
}