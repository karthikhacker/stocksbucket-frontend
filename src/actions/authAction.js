import axios from 'axios';
import { USER_LOADING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, USER_SIGNOUT_SUCCESS } from './types';

// user login 
export const signin = (userObj, history) => {
    // console.log(userObj);
    return async dispatch => {
        dispatch(userLoading())
        try {
            const response = await axios.post('/api/login', { ...userObj });
            if (response.data) {
                // set token to local storage 
                const { token, user } = response.data;
                localStorage.setItem('Access-Token', token);
                localStorage.setItem('User', JSON.stringify(user));
                history.push('/')
                dispatch({
                    type: USER_LOGIN_SUCCESS,
                    payload: {
                        token, user
                    }
                })
            }
            //console.log(response.data);
        } catch (error) {
            console.log(error.response.data)
            dispatch({
                type: USER_LOGIN_ERROR,
                payload: error.response.data
            })
        }
    }
}
export const isLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('Access-Token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('User'))
            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: { token, user }
            })
        }
    }
}
// user signout 
export const userSignout = () => {
    return async dispatch => {
        localStorage.clear();
        dispatch({
            type: USER_SIGNOUT_SUCCESS
        })
    }
}
// user loading
export const userLoading = () => {
    return {
        type: USER_LOADING
    }
}