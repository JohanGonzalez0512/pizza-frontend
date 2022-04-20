import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from "./ui"

export const categoriesMenuStartGetCategoriesMenu = () => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`resmenu_categories`)
            const body = await res.json()
            if (body.ok) {
                dispatch(categoriesMenuSetData(body.data.categories))
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

export const categoriesMenuStartCreateCategoryMenu = (data) => {
    return async (dispatch) => {
       
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`resmenu_categories`, data , 'POST')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Guardado!',
                    text: 'El registro se ha guardado correctamente',
                    icon: 'success',
                })
                dispatch(categoriesMenuAddCategoryMenu(body.data.category));

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


export const categoriesMenuStartUpdateCategoryMenu = (id, data) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`resmenu_categories/${id}`, data, 'PUT')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Actualizado!',
                    text: 'El registro se ha actualizado correctamente',
                    icon: 'success',
                })
                console.log(body)
                dispatch(categoriesMenuUpdateCategoryMenu(body.data.category));
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

export const categoriesMenuStartDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`resmenu_categories/${id}`, {}, 'DELETE')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El registro se ha eliminado correctamente',
                    icon: 'success',
                })
                console.log(body)
                dispatch(categoriesMenuDeleteCategoryMenu(body.data.category));
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

const categoriesMenuSetData = (data) => ({
    type: types.categoriesMenuSetData,
    payload: data
});

export const categoriesMenuSetActiveCategoryMenu = (category) => ({
    type: types.categoriesMenuSetActiveCategoryMenu,
    payload: category
});

const categoriesMenuAddCategoryMenu = (category) => ({
    type: types.categoriesMenuAddCategoryMenu,
    payload: category
});

const categoriesMenuDeleteCategoryMenu = (category) => ({
    type: types.categoriesMenuDeleteCategoryMenu,
    payload: category
});

const categoriesMenuUpdateCategoryMenu = (category) => ({  
    type: types.categoriesMenuUpdateCategoryMenu,
    payload: category
});



export const categoriesMenuCleanActiveCategoryMenu = () => ({
    type: types.categoriesMenuCleanActiveCategoryMenu
});

export const categoriesMenuLogout = () => ({
    type: types.categoriesMenuClearData
});



