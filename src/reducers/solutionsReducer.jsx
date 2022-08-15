import {
    GET_SOLUTIONS,
    GET_SOLUTIONS_SUCCESS,
    GET_SOLUTIONS_ERROR,
    ADD_SOLUTION,
    ADD_SOLUTION_SUCCESS,
    ADD_SOLUTION_ERROR,
    UPDATE_SOLUTION,
    UPDATE_SOLUTION_SUCCESS,
    UPDATE_SOLUTION_ERROR,
    DELETE_SOLUTION,
    DELETE_SOLUTION_SUCCESS,
    DELETE_SOLUTION_ERROR
} from "../types/solution"

const initialState = {
    solutions: [],
    loading: false,
    error: false
}

export default function( state = initialState, action) {
    switch( action.type ) {

        case GET_SOLUTIONS:
        case ADD_SOLUTION:
        case UPDATE_SOLUTION:
        case DELETE_SOLUTION:
            return {
                ...state,
                loading: true
            }

        case GET_SOLUTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                solutions: action.payload
            }

        case ADD_SOLUTION_SUCCESS:
            return {
                ...state,
                loading: false,
                selected_solutions: [],
                solutions: [...state.solutions, action.payload]
            }

        case UPDATE_SOLUTION_SUCCESS:
            return {
                ...state,
                loading: false,
                selected_solutions: [],
                solutions: [...state.solutions.map( solution => solution._id === action.payload._id && action.payload )]
            }

        case DELETE_SOLUTION_SUCCESS:
            return {
                ...state,
                loading: false,
                selected_solutions: [],
                solutions: state.solutions.filter( solution => solution._id !== action.payload)
            }
        
        case GET_SOLUTIONS_ERROR:
        case ADD_SOLUTION_ERROR:
        case UPDATE_SOLUTION_ERROR:
        case DELETE_SOLUTION_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        default:
            return state
    }
}