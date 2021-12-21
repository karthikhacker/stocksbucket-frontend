import { ASSET_DETAIL_ERROR, ASSET_DETAIL_LOADING, GET_ASSET } from "../actions/types";

const initialState = {
    asset: {},
    assetDetailLoading: false,
    assetDetailError: ''
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ASSET_DETAIL_LOADING:
            return {
                ...state,
                assetDetailLoading: true
            }
        case GET_ASSET:
            return {
                ...state,
                asset: action.payload,
                assetDetailLoading: false
            }
        case ASSET_DETAIL_ERROR:
            return {
                ...state,
                assetDetailError: action.payload
            }
        default:
            return state;
    }
}