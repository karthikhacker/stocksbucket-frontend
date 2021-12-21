import axios from 'axios';

import { ACCOUNT_LOADING, CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_SUCCESS } from './types';

// create account 
export const createAccount = (contact, identity, disclosures, agreements, documents) => {
    return async dispatch => {
        dispatch(accountLoading())
        // console.log(userData);
        try {
            const baseUrl = process.env.REACT_APP_BASE_URL;
            const response = await axios.post(`${baseUrl}/v1/accounts`, { contact, identity, disclosures, agreements, documents }, {
                auth: {
                    username: process.env.REACT_APP_API_KEY,
                    password: process.env.REACT_APP_API_SECRET
                }
            })
            console.log(response.data)
            if (response.data) {
                dispatch({
                    type: CREATE_ACCOUNT_SUCCESS,
                    payload: response.data
                })
            }
        } catch (e) {
            console.log(e);
            dispatch({
                type: CREATE_ACCOUNT_FAILURE,
                payload: e.response.data
            })
        }
    }
}
//account loading 
export const accountLoading = () => {
    return {
        type: ACCOUNT_LOADING
    }
}