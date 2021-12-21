import { CLEAR_TICKER, CLEAR_TICKER_ERROR, GET_TICKER, TICKER_ERROR, TICKER_LOADING } from "./types";
import axios from 'axios';

//get ticker 
export const getTicker = (symb) => {
    return async dispatch => {
        dispatch(tickerLoading())
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const response = await axios.get(`${baseUrl}/v1/assets/${symb}`, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }
            });
            if (response.data) {
                dispatch({
                    type: GET_TICKER,
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: TICKER_ERROR,
                payload: 'NOT FOUND'
            })
        }
    }
}
// clear ticker 
export const clearTicker = () => {
    return {
        type: CLEAR_TICKER
    }
}
//clear ticker error 
export const clearTickerError = () => {
    return {
        type: CLEAR_TICKER_ERROR
    }
}
// ticker loading 
export const tickerLoading = () => {
    return {
        type: TICKER_LOADING
    }
}