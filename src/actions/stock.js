import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from "./ui"

export const stockStartGetStock = () => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`stocktaking`)
            const body = await res.json()
            if (body.ok) {
                dispatch(stockSetData(body.data.stock.items))
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

export const stockStartCreateStock = (data, id) => {
    return async (dispatch) => {

        console.log(data)
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`stocktaking/${id}`, data , 'POST')
            const body = await res.json()
            if (body.ok) {
                Swal.fire({
                    title: '¡Guardado!',
                    text: 'El registro se ha guardado correctamente',
                    icon: 'success',
                })
                dispatch(stockAddStock(body.data.stock.item));

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



export const stockStartDelete = (id) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`stocktaking/${id}`, {}, 'DELETE')
            const body = await res.json()
            if (body.ok) {

                Swal.fire({
                    title: '¡Eliminado!',
                    text: 'El registro se ha eliminado correctamente',
                    icon: 'success',
                })
                console.log(body)
                dispatch(stockDeleteStock(body.data.stock.item));
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

const stockSetData = (data) => ({
    type: types.stockSetData,
    payload: data
});

export const stockSetActiveStock = (stock) => ({
    type: types.stockSetActiveStock,
    payload: stock
});

const stockAddStock = (stock) => ({
    type: types.stockAddStock,
    payload: stock
});

const stockDeleteStock = (stock) => ({
    type: types.stockDeleteStock,
    payload: stock
});
const stockUpdateStock = (stock) => ({  
    type: types.stockUpdateStock,
    payload: stock
});


export const stockCleanActiveStock = () => ({
    type: types.stockCleanActiveStock
});

const stockLogout = () => ({
    type: types.stockClearData
});



