import { CREATE_WATCHLIST, GET_CURRENT_WATCHLIST_ID, GET_WATCHLISTS, GET_WATCHLIST, GET_WATCHLISTS_ERROR, GET_WATCHLISTS_LOADING, WATCHLIST_LOADING, ASSET_LOADING, ADD_TICKER_TO_WATCHLIST, ASSET_ERROR, REMOVE_ASSET_FROM_WATCHLIST } from "../actions/types";

const initialState = {
    watchlists: [],
    assets: [],
    assetLoading: false,
    assetError: '',
    assetSuccessMsg: '',
    currentId: '',
    watchlistsLoading: false,
    watchlistLoading: false,
    watchlistsError: '',
    watchlistError: ''
}
export default (state = initialState, action) => {
    switch (action.type) {
        case WATCHLIST_LOADING:
            return {
                ...state,
                watchlistLoading: true
            }
        case GET_WATCHLISTS_LOADING:
            return {
                ...state,
                watchlistsLoading: true
            }
        case GET_WATCHLISTS:
            return {
                ...state,
                watchlists: action.payload,
                watchlistsLoading: false,
                watchlistsError: ''
            }
        case GET_WATCHLIST:
            return {
                ...state,
                assets: action.payload,
                watchlistLoading: false,
            }
        case GET_CURRENT_WATCHLIST_ID:
            return {
                ...state,
                currentId: action.payload
            }
        case CREATE_WATCHLIST:
            return {
                ...state,
                watchlists: [...state.watchlists, action.payload],
                watchlistsLoading: false,
                watchlistsError: ''
            }
        case ASSET_LOADING:
            return {
                ...state,
                assetLoading: true
            }
        case ADD_TICKER_TO_WATCHLIST:
            return {
                ...state,
                assets: action.payload,
                assetLoading: false
            }
        case REMOVE_ASSET_FROM_WATCHLIST:
            return {
                ...state,
                assets: action.payload
            }
        case ASSET_ERROR:
            return {
                ...state,
                assetError: action.payload,
                assetLoading: false
            }
        case GET_WATCHLISTS_ERROR:
            return {
                ...state,
                watchlistsError: action.payload,
                watchlistsLoading: false
            }
        default:
            return state;
    }
}