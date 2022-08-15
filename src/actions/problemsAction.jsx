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
    DELETE_PROBLEM_SUCCESS
} from "../types/problem"

import clientAxios from "../config/axios"

import Swal from 'sweetalert2/dist/sweetalert2.all.js'

// Obtener problemas
export function getProblemsAction(token) {
    return async (dispatch) => {

        dispatch( getProblems() )

        try {
            const { data } = await clientAxios.get(`/problems`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( getProblemsSuccess(data) )

        } catch (error) {
            dispatch( getProblemsError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const getProblems = () => ({
    type: GET_PROBLEMS
})

const getProblemsSuccess = (problems) => ({
    type: GET_PROBLEMS_SUCCESS,
    payload: problems
})

const getProblemsError = () => ({
    type: GET_PROBLEMS_ERROR
})

// Get problem by ID
export function getProblemAction(id) {
    return async (dispatch) => {
        dispatch( getProblem() )

        const token = localStorage.getItem("token")

        try {
            const { data } = await clientAxios.get(`/problems/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( getProblemSuccess(data) )

        } catch (error) {
            dispatch( getProblemError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const getProblem = () => ({
    type: GET_PROBLEM
})

const getProblemSuccess = problem => ({
    type: GET_PROBLEM_SUCCESS,
    payload: problem
})

const getProblemError = () => ({
    type: GET_PROBLEM_ERROR
})


// ADD problem
export function createProblemAction(problem) {
    return async (dispatch) => {

        dispatch( createProblem() )

        const token = localStorage.getItem('token')

        try {
            const { data } = await clientAxios.post('/problems/create-problem', problem, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( createProblemSuccess(data) )

            Swal.fire({
                icon: 'success',
                title: 'El problema se guardo correctamente',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            dispatch( createProblemError() )
            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const createProblem = () => ({
    type: ADD_PROBLEM
})

const createProblemSuccess = problem => ({
    type: ADD_PROBLEM_SUCCESS,
    payload: problem
})

const createProblemError = () => ({
    type: ADD_PROBLEM_ERROR
})


// UPDATE problem
export function updateProblemAction(problem) {
    return async (dispatch) => {

        dispatch( updateProblem() )

        const token = localStorage.getItem('token')

        try {
            const { data } = await clientAxios.put(`/problems/${problem._id}`, problem, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( updateProblemSuccess(problem) )

            Swal.fire({
                icon: 'success',
                title: 'El problema se edito correctamente',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            dispatch( updateProblemError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const updateProblem = () => ({
    type: UPDATE_PROBLEM
})

const updateProblemSuccess = problem => ({
    type: UPDATE_PROBLEM_SUCCESS,
    payload: problem
})

const updateProblemError = () => ({
    type: UPDATE_PROBLEM_ERROR
})


// DELETE problem and all the solutions related to him
export function deleteProblemAction(id) {
    return async (dispatch) => {

        dispatch( deleteProblem() )

        const token = localStorage.getItem('token')

        try {
            await Swal.fire({
                title: 'Desea continuar?',
                text: "Se van a eliminar todas las soluciones referidas a este error",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#0dcaf0',
                cancelButtonColor: '#b64141',
                confirmButtonText: 'Si, continuar',
                cancelButtonText: 'No, cancelar'
            }).then( async (result) => {
                if (result.isConfirmed) {

                    await clientAxios.delete(`/problems/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    dispatch( deleteProblemSuccess(id) )

                    Swal.fire({
                        icon: 'success',
                        title: 'El error fue eliminado',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        } catch (error) {
            dispatch( deleteProblemError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const deleteProblem = () => ({
    type: DELETE_PROBLEM
})

const deleteProblemSuccess = id => ({
    type: DELETE_PROBLEM_SUCCESS,
    payload: id
})

const deleteProblemError = () => ({
    type: DELETE_PROBLEM_ERROR
})