import {
    GET_SOLUTIONS,
    GET_SOLUTIONS_SUCCESS,
    GET_SOLUTIONS_ERROR,
    GET_SOLUTION_BY_PROBLEM_ID,
    GET_SOLUTION_BY_PROBLEM_ID_SUCCESS,
    GET_SOLUTION_BY_PROBLEM_ID_ERROR,
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

import clientAxios from "../config/axios"

import Swal from 'sweetalert2/dist/sweetalert2.all.js'

// GET solutions
export function getSolutionsAction(token) {
    return async (dispatch) => {
        dispatch( getSolutions() )

        try {
            const { data } = await clientAxios.get('/solutions', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( getSolutionsSuccess(data) )

        } catch (error) {
            dispatch( getSolutionsError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const getSolutions = () => ({
    type: GET_SOLUTIONS
})

const getSolutionsSuccess = solutions => ({
    type: GET_SOLUTIONS_SUCCESS,
    payload: solutions
})

const getSolutionsError = () => ({
    type: GET_SOLUTIONS_ERROR
})


// CREATE solution
export function createSolutionAction(solution) {
    return async (dispatch) => {

        dispatch( createSolution() )

        const token = localStorage.getItem('token')

        try {
            const { data } = await clientAxios.post('/solutions/create-solution', solution, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( createSolutionSuccess(data) )

            Swal.fire({
                icon: 'success',
                title: 'La solucion se guardo correctamente',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            dispatch( createSolutionError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const createSolution = () => ({
    type: ADD_SOLUTION
})

const createSolutionSuccess = solution => ({
    type: ADD_SOLUTION_SUCCESS,
    payload: solution
})

const createSolutionError = () => ({
    type: ADD_SOLUTION_ERROR
})


// UPDATE solution
export function updateSolutionAction(solution) {
    return async (dispatch) => {
        dispatch( updateSolution() )

        const token = localStorage.getItem("token")

        try {
            const { data } = await clientAxios.put(`/solutions/${solution._id}`, solution, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( updateSolutionSuccess(data) )

            Swal.fire({
                icon: 'success',
                title: 'La solucion se actualizo correctamente',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            dispatch( updateSolutionError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const updateSolution = () => ({
    type: UPDATE_SOLUTION
})

const updateSolutionSuccess = solution => ({
    type: UPDATE_SOLUTION_SUCCESS,
    payload: solution
})

const updateSolutionError = () => ({
    type: UPDATE_SOLUTION_ERROR
})


// Eliminamos una solucion
export function deleteSolutionAction(id) {
    return async (dispatch) => {

        dispatch( deleteSolution() )

        const token = localStorage.getItem('token')

        try {
            await Swal.fire({
                title: 'Estas seguro?',
                text: "Una solucion eliminada no se puede recuperar",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#0dcaf0',
                cancelButtonColor: '#b64141',
                confirmButtonText: 'Si, eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'La solucion fue eliminada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    clientAxios.delete(`/solutions/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    dispatch( deleteSolutionSuccess(id) )
                }
            })
        } catch (error) {
            dispatch( deleteSolutionError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const deleteSolution = () => ({
    type: DELETE_SOLUTION
})

const deleteSolutionSuccess = id => ({
    type: DELETE_SOLUTION_SUCCESS,
    payload: id
})

const deleteSolutionError = () => ({
    type: DELETE_SOLUTION_ERROR
})