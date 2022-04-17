
import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from "./ui"


export const evauluateOrder = (order) => {

    return async (dispatch) => {

        if (order.is_pre_built) {
            dispatch(orderAddToCartPreBuild(order))
        }
        else {

            dispatch(orderSetActive(order))
        }
    }
}





export const orderStartCancelOrder = (id, value = false) => {
    return async (dispatch) => {

        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`orders/${id}/cancel`, {
                update_stock: value
            }, 'PATCH')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Guardado!',
                    text: 'El registro se ha actualizado correctamente',
                    icon: 'success',
                })
                dispatch(orderCancelOrder(body.data.order));

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


export const orderStartCompleteOrder = (id) => {
    return async (dispatch) => {

        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`orders/${id}/complete`,{}, 'PATCH')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Guardado!',
                    text: 'El registro se ha actualizado correctamente',
                    icon: 'success',
                })
                dispatch(orderCompleteOrder(body.data.order));

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


export const orderStartCreateOrder = (order) => {
    return async (dispatch, getState) => {

        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`orders`, order, 'POST')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Guardado!',
                    text: 'El registro se ha guardado correctamente',
                    icon: 'success',
                })


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



export const orderStartSetDataForms = () => {
    return async (dispatch) => {

        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`resmenu/forms`)
            const body = await res.json()
            if (body.ok) {

                dispatch(orderSetDataForms(body.data.forms))
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


export const orderStartGetData = () => {
    return async (dispatch) => {

        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`orders`)
            const body = await res.json()
            if (body.ok) {

                dispatch(orderSetData(body.data.orders))
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

const orderSetDataForms = (data) => ({
    type: types.orderSetDataForms,
    payload: data
});



const orderSetData = (data) => ({
    type: types.orderSetData,
    payload: data
});

export const orderClearOrder = () => ({
    type: types.orderClearOrder,
});

const orderCancelOrder = (order) => ({
    type: types.orderCancelOrder,
    payload: order
});

const orderCompleteOrder = (order) => ({
    type: types.orderCompleteOrder,
    payload: order
});


export const orderGetTotal = () => ({
    type: types.orderGetTotal
});

export const orderSetActive = (order) => ({
    type: types.orderSetActiveItem,
    payload: order
});

export const orderSetIsActive = () => ({
    type: types.orderSetIsActive,
})

export const orderAddToCart = (order) => ({
    type: types.orderAddToCart,
    payload: order
});


export const orderAddToCartPreBuild = (order) => ({
    type: types.orderAddToCartPreBuild,
    payload: order
});


export const orderAddQuantity = (order) => ({
    type: types.orderAddQuantity,
    payload: order
});

export const orderMinusQuantity = (order) => ({
    type: types.orderMinusQuantity,
    payload: order
})
export const orderDeleteItemCart = (order) => ({
    type: types.orderDeleteItemCart,
    payload: order
});

