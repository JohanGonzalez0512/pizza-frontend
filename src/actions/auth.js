import { fetchConToken, fetchSinToken } from "../helpers/fetch"
import { types } from "../types/types";
import Swal from 'sweetalert2'
import { categoriesLogout } from "./category";
import { categoriesMenuLogout } from "./categoryMenu";
import { menuLogout } from "./menu";
import { orderLogout } from "./order";
import { productsLogout } from "./products";
import { stockLogout } from "./stock";





export const startSendEmail = (email, history) => {
    return async (dispatch) => {
        try {
            const resp = await fetchSinToken('correos', { email }, 'POST')
            const body = await resp.json();
            if (body.ok) {
                dispatch(sendEmail(email))
                Swal.fire({
                    title: '¡Genial!',
                    text: body.msg,
                    icon: 'success'
                });

                history.push("/auth/restore-password");
            }
            else {
                Swal.fire({
                    title: 'Error',
                    text: body.msg,
                    icon: 'error'
                });
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Hablar con el administrador', 'error');
        }
    }
}



export const startResetPassword = (code, password, history) => {
    return async (dispatch) => {
        try {
            const resp = await fetchSinToken(`correos/${code}`, { password }, 'PUT')
            const body = await resp.json();
            if (body.ok) {
                dispatch(setCodeAndPassword({
                    code,
                    password
                }))
                Swal.fire({
                    title: '¡Genial!',
                    text: body.msg,
                    icon: 'success'
                });

                history.push("/auth/login");
            }
            else {
                Swal.fire({
                    title: 'Error',
                    text: body.msg,
                    icon: 'error'
                });
            }
        } catch (error) {
            console.log(error);
            Swal.fire('Error', 'Hablar con el administrador', 'error');
        }
    }
}

export const startLogin = (email, password) => {
    return async (dispatch) => {
        dispatch(authCheckingStart());
        try {
            const resp = await fetchSinToken('auth/login', { email, password }, 'POST')
            const body = await resp.json();
            console.log(body)
            dispatch(authCheckingFinish())
            if (body.ok) {
                localStorage.setItem('token', body.data.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(login({
                    id: body.data.user.id,
                    name: body.data.user.fullname
                }
                ))
            }
            else {
                Swal.fire({
                    title: 'Error',
                    text: body.msg,
                    icon: 'error'
                });
            }
        } catch (error) {
            dispatch(authCheckingFinish())
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }



    }
}


export const startChecking = () => {
    return async (dispatch) => {
        if (localStorage.getItem('token')) {
            dispatch(authCheckingStart())
            const resp = await fetchConToken('auth/renew', {}, 'POST');
            const body = await resp.json();


            if (body.ok) {
                localStorage.setItem('token', body.data.token);
                localStorage.setItem('token-init-date', new Date().getTime());
                dispatch(login({
                    id: body.data.user.id,
                    name: body.data.user.fullname
                }
                ))
                dispatch(authCheckingFinish())
            }
            else {
                dispatch(authCheckingFinish())
                Swal.fire({
                    title: '¡Oops!',
                    text: "Parece que tu sesión ha expirado",
                    icon: 'question',
                })
                dispatch(startLogout())
            }
        }
    }
}


export const authCheckingStart = () => ({ type: types.authCheckingStart })
export const authCheckingFinish = () => ({ type: types.authCheckingFinish })

const login = (user) => ({

    type: types.authLogin,
    payload: user
})


export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(categoriesLogout());
        dispatch(categoriesMenuLogout());
        dispatch(menuLogout());
        dispatch(orderLogout());
        dispatch(productsLogout());
        dispatch(stockLogout());
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.authLogout
})
export const forgotPasswordCleaning = () => ({
    type: types.authForgotPasswordCleaning
})
const sendEmail = (email) => ({
    type: types.authSetEmail,
    payload: email
})
const setCodeAndPassword = (passwordAndCode) => ({
    type: types.authSetCodeAndPassword,
    payload: passwordAndCode
})


