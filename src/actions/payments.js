import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"

import download from 'downloadjs';
import { uiFinishLoading, uiStartLoading } from "./ui"

export const ExpenseStartCreateExpense = (data) => {
    return async (dispatch) => {
        try {
            dispatch(uiStartLoading())

            const res = await fetchConToken(`payments`, data, 'POST')
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



export const reportStartGenerateReport = (from,to) => {
    return async (dispatch) => {
       
        try {
            const res = await fetchConToken(`sells_and_expenses_report?from=${from}&to${to}`)
            const blob = await res.blob();
            const statusDocument = download(blob, "test.pdf");
            console.log(statusDocument)
            if (statusDocument) {
                Swal.fire({
                    title: '¡Exito!',
                    text: 'Se ha generado el documento',
                    icon: 'success',
                })
            }
            else {
                Swal.fire({
                    title: '¡Oops!',
                    text: 'No se ha podido generar el documento, por favor intente de nuevo más tarde',
                    icon: 'error',
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
     
    }
}
