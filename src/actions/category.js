import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"
import { startChecking } from "./auth"
import { uiFinishLoading, uiStartLoading } from "./ui"

export const categoriesStartGetCategories = () => {
    return async (dispatch) => {
        try {
            dispatch(startChecking());
            dispatch(uiStartLoading())

            const res = await fetchConToken(`product_categories`)
            const body = await res.json()
            if (body.ok) {
                dispatch(categoriesSetData(body.data.product_categories))
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
        dispatch(uiFinishLoading())

    }
}

export const categoriesStartCreateCategory = (data) => {
    return async (dispatch) => {
       
        try {
            dispatch(startChecking());
            dispatch(uiStartLoading())

            const res = await fetchConToken(`product_categories`, data , 'POST')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Guardado!',
                    text: 'El registro se ha guardado correctamente',
                    icon: 'success',
                })
                dispatch(categoriesAddCategory(body.data.category));

            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
        dispatch(uiFinishLoading())

    }
}


export const categoriesStartUpdateCategory = (id, data) => {
    return async (dispatch) => {
        try {
            dispatch(startChecking());
            dispatch(uiStartLoading())

            const res = await fetchConToken(`product_categories/${id}`, data, 'PUT')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Actualizado!',
                    text: 'El registro se ha actualizado correctamente',
                    icon: 'success',
                })
                console.log(body)
                dispatch(categoriesUpdateCategory(body.data.category));
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
        dispatch(uiFinishLoading())

    }
}

export const categoriesStartDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch(startChecking());
            dispatch(uiStartLoading())

            const res = await fetchConToken(`product_categories/${id}`, {}, 'DELETE')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El registro se ha eliminado correctamente',
                    icon: 'success',
                })
                console.log(body)
                dispatch(categoriesDeleteCategory(body.data.category));
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
        dispatch(uiFinishLoading())
    }
}

const categoriesSetData = (data) => ({
    type: types.categoriesSetData,
    payload: data
});

export const categoriesSetActiveCategory = (category) => ({
    type: types.categoriesSetActiveCategory,
    payload: category
});

const categoriesAddCategory = (category) => ({
    type: types.categoriesAddCategory,
    payload: category
});

const categoriesDeleteCategory = (category) => ({
    type: types.categoriesDeleteCategory,
    payload: category
});
const categoriesUpdateCategory = (category) => ({  
    type: types.categoriesUpdateCategory,
    payload: category
});


export const categoriesCleanActiveCategory = () => ({
    type: types.categoriesCleanActiveCategory
});

export const categoriesLogout = () => ({
    type: types.categoriesClearData
});



