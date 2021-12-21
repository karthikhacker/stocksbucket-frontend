import { ASSET_DETAIL_ERROR, ASSET_DETAIL_LOADING, GET_ASSET } from "./types";
import axios from 'axios';

// GET ASET 
export const getAsset = (id) => {
    return async dispatch => {
        dispatch(assetDetailLoading())
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const response = await axios.get(`${baseUrl}/v1/assets/${id}`, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }

            })
            if (response.data) {
                console.log(response.data)
                dispatch({
                    type: GET_ASSET,
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: ASSET_DETAIL_ERROR,
                payload: error
            })
        }
    }
}
//assetDetailLoading 
export const assetDetailLoading = () => {
    return {
        type: ASSET_DETAIL_LOADING
    }
}