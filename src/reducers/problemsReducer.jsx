import {
    GET_PROBLEM,
    GET_PROBLEM_SUCCESS,
    GET_PROBLEM_ERROR,
    GET_PROBLEMS,
    GET_PROBLEMS_SUCCESS,
    GET_PROBLEMS_ERROR,
    ADD_PROBLEM,
    ADD_PROBLEM_SUCCESS,
    ADD_PROBLEM_ERROR,
    UPDATE_PROBLEM,
    UPDATE_PROBLEM_SUCCESS,
    UPDATE_PROBLEM_ERROR,
    DELETE_PROBLEM,
    DELETE_PROBLEM_SUCCESS,
    DELETE_PROBLEM_ERROR
} from "../types/problem"

const initialState = {
    problems: [],
    problem: {},
    error: false,
    loading: false
}

export default function( state = initialState, action ) {
    switch( action.type ) {
        case GET_PROBLEMS:
        case GET_PROBLEM:
        case ADD_PROBLEM:
        case UPDATE_PROBLEM:
        case DELETE_PROBLEM:
            return {
                ...state,
                loading: true
            }

        case GET_PROBLEMS_SUCCESS:
            return {
                ...state,
                problems: action.payload,
                loading: false
            }

        case GET_PROBLEM_SUCCESS:
            return {
                ...state,
                problem: action.payload,
                loading: false
            }

        case ADD_PROBLEM_SUCCESS:
            return {
                ...state,
                problems: [...state.problems, action.payload],
                loading: false
            }

        case UPDATE_PROBLEM_SUCCESS:
            return {
                ...state,
                problems: [...state.problems.map( problem => problem._id === action.payload._id && action.payload )],
                loading: false
            }

        case DELETE_PROBLEM_SUCCESS:
            return {
                ...state,
                problems: state.problems.filter( problem => problem._id !== action.payload ),
                loading: false
            }

        case GET_PROBLEMS_ERROR:
        case GET_PROBLEM_ERROR:
        case ADD_PROBLEM_ERROR:
        case UPDATE_PROBLEM_ERROR:
        case DELETE_PROBLEM_ERROR:
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