import { USER_LOADING, USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_SIGNOUT_FAILURE, USER_SIGNOUT_SUCCESS } from "../actions/types";


const initalState = {
    token: null,
    user: null,
    isAuthenticated: false,
    userLoading: false,
    authError: null,
}
export default (state = initalState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                userLoading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
                userLoading: false,
                authError: null
            }
        case USER_LOGIN_ERROR:
            return {
                ...state,
                authError: action.payload,
                userLoading: false,
                isAuthenticated: false,
                token: null,
            }
        case USER_SIGNOUT_SUCCESS:
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                userLoading: false,
                authError: null
            }
        default:
            return state;
    }
}