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
} from '../types/auth'

import clientAxios from '../config/axios'

import Swal from 'sweetalert2/dist/sweetalert2.all.js'

// Logueamos user y guardamos el token
export function authUserAction(credentials) {
    return async (dispatch) => {
        dispatch( authUser() )

        try {
            const { data } = await clientAxios.post('/users/login', credentials)

            dispatch( authUserSuccess(data) )
            localStorage.setItem('token', data.token)

        } catch (error) {
            dispatch( authUserError() )
            
            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const authUser = () => ({
    type: AUTH_USER
})

const authUserSuccess = user => ({
    type: AUTH_USER_SUCCESS,
    payload: user
})

const authUserError = () => ({
    type: AUTH_USER_ERROR
})

// Obtener los datos desde LS en casos de que se reloguee la pagina
export function getDataFromLSAction() {
    return async (dispatch) => {
        dispatch( getDataFromLS() )

        const token = localStorage.getItem('token')

        try {
            const { data } = await clientAxios.get('/users/user', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch( getDataFromLSSuccess(data) )

        } catch (error) {
            dispatch( getDataFromLSError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const getDataFromLS = () => ({
    type: GET_DATA_FROMLS
})

const getDataFromLSSuccess = user => ({
    type: GET_DATA_FROMLS_SUCCESS,
    payload: user
})

const getDataFromLSError = () => ({
    type: GET_DATA_FROMLS_ERROR
})

// Eliminamos toda la info para desloguear
export function logOutAction() {
    return (dispatch) => {
        dispatch( logOut() )

        try {
            localStorage.removeItem('token')
            dispatch( logOutSuccess() )

        } catch (error) {
            dispatch( logOutError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const logOut = () => ({
    type: LOG_OUT
})

const logOutSuccess = () => ({
    type: LOG_OUT_SUCCESS
})

const logOutError = () => ({
    type: LOG_OUT_ERROR
})