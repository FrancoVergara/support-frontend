import {
    AUTH_USER,
    AUTH_USER_SUCCESS,
    AUTH_USER_ERROR,
    GET_DATA_FROMLS,
    GET_DATA_FROMLS_SUCCESS,
    GET_DATA_FROMLS_ERROR,
    LOG_OUT,
    LOG_OUT_SUCCESS,
    LOG_OUT_ERROR
} from "../types/auth"

const initialState = {
    user: {},
    loading: false,
    error: false
}

export default function( state = initialState, action ) {
    switch( action.type ) {
        case AUTH_USER:
        case GET_DATA_FROMLS:
        case LOG_OUT:
            return {
                ...state,
                loading: true
            }

        case AUTH_USER_SUCCESS:
        case GET_DATA_FROMLS_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }

        case LOG_OUT_SUCCESS:
            return {
                ...state,
                user: {},
                loading: false
            }

        case AUTH_USER_ERROR:
        case GET_DATA_FROMLS_ERROR:
        case LOG_OUT_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state
    }
}