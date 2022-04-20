import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from "./ui"

export const menuStartGetItemsMenu = () => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`resmenu`)
            const body = await res.json()
            if (body.ok) {
                dispatch(menuSetData(body.data.menu.items))
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

export const menuStartCreateItemMenu = (data) => {
    return async (dispatch) => {
      
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`resmenu`, data , 'POST')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Guardado!',
                    text: 'El registro se ha guardado correctamente',
                    icon: 'success',
                })
                dispatch(menuAddItemMenu(body.data.resmenu.item));

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


export const menuStartUpdateItemMenu = (data, id) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`resmenu/${id}`, data, 'PUT')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Actualizado!',
                    text: 'El registro se ha actualizado correctamente',
                    icon: 'success',
                })
                console.log(body)
                dispatch(menuUpdateItemMenu(body.data.resmenu.item));
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

export const menuStartDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`resmenu/${id}`, {}, 'DELETE')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El registro se ha eliminado correctamente',
                    icon: 'success',
                })
                console.log(body)
                dispatch(menuDeleteItemMenu(body.data.resmenu.item));
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

const menuSetData = (data) => ({
    type: types.menuSetData,
    payload: data
});




export const menuSetActiveItemMenu = (item) => ({
    type: types.menuSetActiveItemMenu,
    payload: item
});

const menuAddItemMenu = (item) => ({
    type: types.menuAddItemMenu,
    payload: item
});

const menuDeleteItemMenu = (item) => ({
    type: types.menuDeleteItemMenu,
    payload: item
});

const menuUpdateItemMenu = (item) => ({  
    type: types.menuUpdateItemMenu,
    payload: item
});


export const menuCleanActiveItemMenu = () => ({
    type: types.menuCleanActiveItemMenu
});

export const menuLogout = () => ({
    type: types.menuClearData
});



