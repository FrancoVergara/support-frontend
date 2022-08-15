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

import clientAxios from '../config/axios'

import Swal from 'sweetalert2/dist/sweetalert2.all.js'

// GET category
export function getCategoriesAction() {
    return async (dispatch) => {
        dispatch( getCategories() )

        const token = localStorage.getItem('token')

        try {
            const { data } = await clientAxios.get('/categories', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch( getCategoriesSuccess(data) )

        } catch (error) {
            dispatch( getCategoriesError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const getCategories = () => ({
    type: GET_CATEGORIES
})

const getCategoriesSuccess = categories => ({
    type: GET_CATEGORIES_SUCCESS,
    payload: categories
})

const getCategoriesError = () => ({
    type: GET_CATEGORIES_ERROR
})

// POST category
export function createNewCategoryAction(category) {
    return async (dispatch) => {
        dispatch( createNewCategory() )

        const token = localStorage.getItem('token')

        try {
            const { data } = await clientAxios.post('/categories/create-category', category, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch( createNewCategorySuccess(data) )

            Swal.fire({
                icon: 'success',
                title: 'La categoria se guardo correctamente',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            dispatch( createNewCategoryError() )

            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const createNewCategory = () => ({
    type: ADD_CATEGORY
})

const createNewCategorySuccess = category => ({
    type: ADD_CATEGORY_SUCCESS,
    payload: category
})

const createNewCategoryError = () => ({
    type: ADD_CATEGORY_ERROR
})


// UPDATE category
export function updateCategoryAction(category) {
    return async (dispatch) => {

        dispatch( updateCategory() )

        const token = localStorage.getItem('token')

        try {
            const { data } = await clientAxios.put(`/categories/${category._id}`, category, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            dispatch( updateCategorySuccess(data) )

            Swal.fire({
                icon: 'success',
                title: 'Categoria editada correctamente',
                showConfirmButton: false,
                timer: 1500
            })

        } catch (error) {
            dispatch( updateCategoryError() )
            Swal.fire({
                icon: 'error',
                title: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const updateCategory = () => ({
    type: UPDATE_CATEGORY
})

const updateCategorySuccess = category => ({
    type: UPDATE_CATEGORY_SUCCESS,
    payload: category
})

const updateCategoryError = () => ({
    type: UPDATE_CATEGORY_ERROR
})


// DELETE category
export function deleteCategoryAction(id) {
    return async (dispatch) => {

        dispatch( deleteCategory() )

        const token = localStorage.getItem('token')

        try {
            await Swal.fire({
                title: 'Desea continuar?',
                text: "Todo lo relacionado a la categoria se eliminara",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#0dcaf0',
                cancelButtonColor: '#b64141',
                confirmButtonText: 'Si, continuar',
                cancelButtonText: 'No, cancelar'
            }).then( async (result) => {
                if (result.isConfirmed) {
        
                    await clientAxios.delete(`/categories/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    dispatch( deleteCategorySuccess(id) )

                    Swal.fire({
                        icon: 'success',
                        title: error.response.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        } catch (error) {
            dispatch( deleteCategoryError() )
            Swal.fire({
                icon: 'error',
                title: 'Hubo un problema',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}

const deleteCategory = () => ({
    type: DELETE_CATEGORY
})

const deleteCategorySuccess = id => ({
    type: DELETE_CATEGORY_SUCCESS,
    payload: id
})

const deleteCategoryError = () => ({
    type: DELETE_CATEGORY_ERROR
})