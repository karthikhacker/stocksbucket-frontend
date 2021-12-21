import { GET_WATCHLISTS, GET_WATCHLISTS_ERROR, WATCHLIST_LOADING, CREATE_WATCHLIST, GET_WATCHLISTS_LOADING, GET_CURRENT_WATCHLIST_ID, GET_WATCHLIST, ADD_TICKER_TO_WATCHLIST, ASSET_LOADING, REMOVE_ASSET_FROM_WATCHLIST } from "./types";
import axios from 'axios';

//get watchlists 
export const getWatchlists = () => {
    return async dispatch => {
        dispatch(watchlistsLoading());
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const accId = 'e94d1468-da8a-4bcc-a4dc-ccc25a40c8b4';
            const response = await axios.get(`${baseUrl}/v1/trading/accounts/${accId}/watchlists`, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }
            });
            if (response.data) {
                // console.log(response.data)
                dispatch({
                    type: GET_WATCHLISTS,
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: GET_WATCHLISTS_ERROR,
                payload: error
            })
        }
    }
}
// create watchlist 
export const createWatchlist = (name) => {
    return async dispatch => {
        dispatch(watchlistsLoading());
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const accId = 'e94d1468-da8a-4bcc-a4dc-ccc25a40c8b4';
            const response = await axios.post(`${baseUrl}/v1/trading/accounts/${accId}/watchlists`, { name }, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }
            });
            if (response.data) {
                //console.log(response.data)
                dispatch({
                    type: CREATE_WATCHLIST,
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: GET_WATCHLISTS_ERROR,
                payload: error
            })
        }
    }
}
//get current watchlist id 
export const getCurrentWatchlistId = () => {
    return async dispatch => {
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const accId = 'e94d1468-da8a-4bcc-a4dc-ccc25a40c8b4';
            const response = await axios.get(`${baseUrl}/v1/trading/accounts/${accId}/watchlists`, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }
            });
            if (response.data) {
                // console.log(response.data)
                dispatch({
                    type: GET_CURRENT_WATCHLIST_ID,
                    payload: response.data[0].id
                })
            }
        } catch (error) {
            dispatch({
                type: GET_WATCHLISTS_ERROR,
                payload: error
            })
        }
    }
}
// get watchlist 
export const getWatchlist = (id) => {
    return async dispatch => {
        dispatch(watchlistLoading())
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const accId = 'e94d1468-da8a-4bcc-a4dc-ccc25a40c8b4';
            const response = await axios.get(`${baseUrl}/v1/trading/accounts/${accId}/watchlists/${id}`, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }
            });
            if (response.data.assets !== undefined) {
                // console.log(response.data)
                dispatch({
                    type: GET_WATCHLIST,
                    payload: response.data.assets
                })
            }
        } catch (error) {
            dispatch({
                type: GET_WATCHLISTS_ERROR,
                payload: error
            })
        }
    }
}
// add ticker  to watchlists 
export const addTickersToWatchlist = (symb, id) => {
    return async dispatch => {
        dispatch(assetLoading());
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const accId = 'e94d1468-da8a-4bcc-a4dc-ccc25a40c8b4';
            const response = await axios.post(`${baseUrl}/v1/trading/accounts/${accId}/watchlists/${id}`, { symbol: symb }, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }
            });
            if (response.data.assets !== undefined) {
                //console.log(response.data.assets)
                dispatch({
                    type: ADD_TICKER_TO_WATCHLIST,
                    payload: response.data.assets
                })
            }
        } catch (error) {
            dispatch({
                type: GET_WATCHLISTS_ERROR,
                payload: error
            })
        }
    }
}
// remove asset from watchlist 
export const removeAssetFromWatchlist = (symb, id) => {
    return async dispatch => {
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const accId = 'e94d1468-da8a-4bcc-a4dc-ccc25a40c8b4';
            const response = await axios.delete(`${baseUrl}/v1/trading/accounts/${accId}/watchlists/${id}/${symb}`, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }
            });
            if (response.data.assets !== undefined) {
                console.log(response.data)
                dispatch({
                    type: REMOVE_ASSET_FROM_WATCHLIST,
                    payload: response.data.assets
                })
            }
        } catch (error) {
            dispatch({
                type: GET_WATCHLISTS_ERROR,
                payload: error
            })
        }
    }
}
//watchlist loading 
export const watchlistLoading = () => {
    return {
        type: WATCHLIST_LOADING
    }
}
//get watchlist loading 
export const watchlistsLoading = () => {
    return {
        type: GET_WATCHLISTS_LOADING
    }
}
// asset loading 
const assetLoading = () => {
    return {
        type: ASSET_LOADING
    }
}