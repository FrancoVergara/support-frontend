import {
    GET_NEWS,
    GET_NEWS_SUCCESS,
    GET_NEWS_ERROR,
    ADD_NEWS,
    ADD_NEWS_SUCCESS,
    ADD_NEWS_ERROR,
    SELECT_NEWS_UPDATE,
    START_UPDATE_NEWS,
    UPDATE_NEWS_SUCCESS,
    UPDATE_NEWS_ERROR,
    DELETE_NEWS,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_ERROR,
} from "../types/news"


const initialState = {
    news: [],
    newsupdate: [],
    loading: false,
    error: false
}

export default function( state = initialState, action ) {
    switch( action.type ) {

        case GET_NEWS:
        case ADD_NEWS:
        case START_UPDATE_NEWS:
        case DELETE_NEWS:
            return {
                ...state,
                loading: true
            }

        case GET_NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload,
                loading: false
            }

        case ADD_NEWS_SUCCESS:
            return {
                ...state,
                news: [...state.news, action.payload],
                loading: false
            }

        case SELECT_NEWS_UPDATE:
            return {
                ...state,
                newsupdate: action.payload
            }

        case UPDATE_NEWS_SUCCESS:
            return {
                ...state,
                news: [...state.news.map( notice => notice._id === action.payload._id ? notice = action.payload : notice )],
                loading: false
            }

        case DELETE_NEWS_SUCCESS:
            return {
                ...state,
                news: state.news.filter( notice => notice._id !== action.payload ),
                loading: false
            }

        case GET_NEWS_ERROR:
        case ADD_NEWS_ERROR:
        case UPDATE_NEWS_ERROR:
        case DELETE_NEWS_ERROR:
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