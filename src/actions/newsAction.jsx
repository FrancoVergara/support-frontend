import {
    GET_NEWS,
    GET_NEWS_SUCCESS,
    GET_NEWS_ERROR,
    ADD_NEWS,
    ADD_NEWS_SUCCESS,
    ADD_NEWS_ERROR,
    START_UPDATE_NEWS,
    UPDATE_NEWS_SUCCESS,
    UPDATE_NEWS_ERROR,
    DELETE_NEWS,
    DELETE_NEWS_SUCCESS,
    DELETE_NEWS_ERROR
} from "../types/news"

import clientAxios from "../config/axios"

import Swal from 'sweetalert2/dist/sweetalert2.all.js'

// GET news
export function getNewsAction(token) {
    return async (dispatch) => {
        dispatch( getNews() )

        try {
            const { data } = await clientAxios.get('/news', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch( getNewsSuccess(data) )

        } catch (error) {
            dispatch( getNewsError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const getNews = () => ({
    type: GET_NEWS
})

const getNewsSuccess = news => ({
    type: GET_NEWS_SUCCESS,
    payload: news
})

const getNewsError = () => ({
    type: GET_NEWS_ERROR
})

// ADD news
export function addNewsAction(news) {
    return async (dispatch) => {
        dispatch( addNews() )

        const token = localStorage.getItem('token')

        try {
            const { data } = await clientAxios.post('/news/create-news', news, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch( addNewsSuccess(data) )

            Swal.fire({
                icon: 'success',
                title: 'Noticia agregada correctamente',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            dispatch( addNewsError() )
            
            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const addNews = () => ({
    type: ADD_NEWS
})

const addNewsSuccess = news => ({
    type: ADD_NEWS_SUCCESS,
    payload: news
})

const addNewsError = () => ({
    type: ADD_NEWS_ERROR
})

// UPDATE news
export function updateNewsAction(news) {
    return async (dispatch) => {
        dispatch( updateNews() )

        const token = localStorage.getItem('token')

        try {
            const { data } = await clientAxios.put(`/news/${news._id}`, news, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( updateNewsSuccess(data) )

            Swal.fire({
                icon: 'success',
                title: 'La noticia se edito correctamente',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            dispatch( updateNewsError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const updateNews = () => ({
    type: START_UPDATE_NEWS
})

const updateNewsSuccess = news => ({
    type: UPDATE_NEWS_SUCCESS,
    payload: news
})

const updateNewsError = () => ({
    type: UPDATE_NEWS_ERROR
})


// DELETE news
export function deleteNewsAction(id) {
    return async (dispatch) => {
        dispatch( deleteNews() )

        const token = localStorage.getItem('token')

        try {
            await clientAxios.delete(`/news/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( deleteNewsSuccess(id) )

            Swal.fire({
                icon: 'success',
                title: 'La noticia se elimino correctamente',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            dispatch( deleteNewsError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const deleteNews = () => ({
    type: DELETE_NEWS
})

const deleteNewsSuccess = id => ({
    type: DELETE_NEWS_SUCCESS,
    payload: id
})

const deleteNewsError = () => ({
    type: DELETE_NEWS_ERROR
})