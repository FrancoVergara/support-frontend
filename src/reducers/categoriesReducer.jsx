import {
    GET_CATEGORIES,
    GET_CATEGORIES_SUCCESS,
    GET_CATEGORIES_ERROR,
    ADD_CATEGORY,
    ADD_CATEGORY_SUCCESS,
    ADD_CATEGORY_ERROR,
    UPDATE_CATEGORY,
    UPDATE_CATEGORY_SUCCESS,
    UPDATE_CATEGORY_ERROR,
    DELETE_CATEGORY,
    DELETE_CATEGORY_SUCCESS,
    DELETE_CATEGORY_ERROR
} from '../types/category'

const initialState = {
    categories: [],
    loading: false,
    error: false
}

export default function( state = initialState, action ) {
    switch( action.type ) {
        case GET_CATEGORIES:
        case ADD_CATEGORY:
        case UPDATE_CATEGORY:
        case DELETE_CATEGORY:
            return {
                ...state,
                loading: true
            }

        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                loading: false
            }

        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                loading: false
            }

        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories.map( category => category._id === action.payload._id ? category = action.payload : category )],
                loading: false
            }

        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.filter( category => category._id !== action.payload ),
                loading: false
            }

        case GET_CATEGORIES_ERROR:
        case ADD_CATEGORY_ERROR:
        case UPDATE_CATEGORY_ERROR:
        case DELETE_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default: {
            return state
        }
    }
}