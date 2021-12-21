import { CLEAR_TICKER, CLEAR_TICKER_ERROR, GET_TICKER, TICKER_ERROR, TICKER_LOADING } from "../actions/types";

const initialState = {
    ticker: {},
    tickerError: '',
    tickerLoading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case TICKER_LOADING:
            return {
                ...state,
                tickerLoading: true
            }
        case GET_TICKER:
            return {
                ...state,
                ticker: action.payload,
                tickerLoading: false,
                tickerError: ""
            }
        case TICKER_ERROR:
            return {
                ...state,
                tickerError: action.payload
            }
        case CLEAR_TICKER_ERROR:
            return {
                ...state,
                tickerError: ''
            }
        case CLEAR_TICKER:
            return {
                ...state,
                ticker: ""
            }
        default:
            return state;
    }
}