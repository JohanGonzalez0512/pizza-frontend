import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"
import { startChecking } from "./auth"
import { uiFinishLoading, uiStartLoading } from "./ui"

export const productsStartGetProducts = () => {
    return async (dispatch) => {
        try {

            dispatch(startChecking());
            dispatch(uiStartLoading())

            const res = await fetchConToken(`products`)
            const body = await res.json()
            if (body.ok) {
                dispatch(productsSetData(body.data.products))
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

export const productsStartCreateProduct = (data, category) => {
    return async (dispatch) => {
        try {
            dispatch(startChecking());
            dispatch(uiStartLoading())

            const res = await fetchConToken(`products`, {
                ...data,
                category:{
                    id: category
                }
            } , 'POST')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Guardado!',
                    text: 'El registro se ha guardado correctamente',
                    icon: 'success',
                })
                dispatch(productsAddProduct(body.data.product));

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


export const productsStartUpdateProduct = (id, data, category) => {
    return async (dispatch,) => {
        try {
            dispatch(startChecking());
            dispatch(uiStartLoading())

            const res = await fetchConToken(`products/${id}`, {
                ...data,
                category:{
                    id: category
                }

            }, 'PUT')
            const body = await res.json()
            if (body.ok) {

                Swal.fire({
                    title: '¡Actualizado!',
                    text: 'El registro se ha actualizado correctamente',
                    icon: 'success',
                })
                console.log(body)
                dispatch(productsUpdateProduct(body.data.product));
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

export const productsStartDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch(startChecking());
            dispatch(uiStartLoading())

            const res = await fetchConToken(`products/${id}`, {}, 'DELETE')
            const body = await res.json()
            if (body.ok) {

                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El registro se ha eliminado correctamente',
                    icon: 'success',
                })
                console.log(body)
                dispatch(productsDeleteProduct(body.data.product));
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

const productsSetData = (data) => ({
    type: types.productsSetData,
    payload: data
});

export const productsSetActiveProduct = (product) => ({
    type: types.productsSetActiveProduct,
    payload: product
});

const productsAddProduct = (product) => ({
    type: types.productsAddProduct,
    payload: product
});

const productsDeleteProduct = (product) => ({
    type: types.productsDeleteProduct,
    payload: product
});
const productsUpdateProduct = (product) => ({  
    type: types.productsUpdateProduct,
    payload: product
});


export const productsCleanActiveProduct = () => ({
    type: types.productsCleanActiveProduct
});

export const productsLogout = () => ({
    type: types.productsClearData
});



