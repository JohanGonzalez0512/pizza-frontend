import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { orderClearOrder, orderGetTotal, orderStartCreateOrder } from '../../actions/order';
import { useNavigate } from "react-router-dom";
import { uiSetIsModalOpen } from '../../actions/ui';

export const InfoPaymentScreen = () => {
    let navigate = useNavigate();

    const { orders: { total, cart } } = useSelector(state => state);

    const [quantity, setQuantity] = useState(0);
    
    const handleQuantity = (e , setFieldValue) => {
        
        setQuantity(e.target.value)
        if (e.target.value > total) {
            let result = e.target.value - total  
            setFieldValue('change', result)
        }
        else {
            setFieldValue('change', 0)
        }
    }

    const dispatch = useDispatch();
    const handleSubmit = (values, resetForm) => {

        
        dispatch(orderStartCreateOrder({
            total:values.total,
            change:values.change,
            delivery_details:{
                type:values.type,
                address:values.address,
                contact_phone:values.contact_phone,
                payment_method:values.payment_method,
                cost_shipping:values.cost_shipping,
            },
            items:[
                ...cart
            ]
        }))
        resetForm();
        dispatch(uiSetIsModalOpen())
        dispatch(orderClearOrder())
        navigate(`/`);
    }


    useEffect(() => {
        dispatch(orderGetTotal());
    }, [cart])


    
    return (
        <div className='container'>
            <Formik
                initialValues={
                    {
                        address: '',
                        type: '',
                        payment_method: '',
                        change: 0,
                        total: total,
                        contact_phone: '',
                        cost_shipping:0
                    }
                }
                enableReinitialize={true}
                validationSchema={
                    Yup.object({
                        total: Yup.number()
                            .required('Requerido'),
                        type: Yup.string().required('requerido'),
                        address: Yup.string().when('type', {
                            is: '2',
                            then: Yup.string().required('requerido'),
                            otherwise: Yup.string()
                        }),
                        contact_phone: Yup.string().when('type', {
                            is: '2',
                            then: Yup.string().required('requerido').max(10, 'Maximo 10 digitos'),
                            otherwise: Yup.string()
                        }),
                        cost_shipping: Yup.number().when('type', {
                            is: '2',
                            then: Yup.number().required('requerido'),
                            otherwise: Yup.number()
                        }),

                        payment_method: Yup.string().required('requerido'),

                        change: Yup.number().when('payment_method', {
                            is: '1',
                            then: Yup.number().required('requerido'),
                            otherwise: Yup.number()
                        }),


                    })}

                onSubmit={(values , {resetForm}) => {
                    handleSubmit(values, resetForm)
                }}

            >
                {({ values, setFieldValue, resetForm }) => (
                    <Form className='card'>
                        <h2 className='card__title'>
                            Realizar Pedido
                        </h2>
                        <div className='card__form scroll'>
                            <div className='col'>
                                <h1>Tipo de pedido</h1>
                                <div className="card__form__item">
                                    <label onClick={() => setFieldValue('address', '')} >
                                        Comer aquí
                                        <Field type="radio" value={'1'} name="type" />
                                    </label>
                                    <label >
                                        A domicilio
                                        <Field type="radio" value={'2'} name="type" />
                                    </label>
                                    <label onClick={() => setFieldValue('address', '')} >
                                        Para llevar
                                        <Field type="radio" value={'3'} name="type" />
                                    </label>
                                    <ErrorMessage name="type" component={'span'} />
                                </div>

                                {
                                    values && values.type === '2' &&
                                    <>
                                        <div className="card__form__item">
                                            <label htmlFor="name">Direccion</label>
                                            <Field type="text" name="address" />
                                            <ErrorMessage name="address" component={'span'} />
                                        </div>
                                        <div className="card__form__item">
                                            <label htmlFor="name">Numero de telefono</label>
                                            <Field type="text" name="contact_phone" />
                                            <ErrorMessage name="contact_phone" component={'span'} />
                                        </div>
                                        <div className="card__form__item">
                                            <label htmlFor="name">Costo de envio</label>
                                            <Field type="number" name="cost_shipping" />
                                            <ErrorMessage name="cost_shipping" component={'span'} />
                                        </div>
                                    </>
                                }
                                        <div className="card__form__item">
                                            <label htmlFor="name">¿Cambio de total?</label>
                                            <Field type="number" name="total" />
                                        </div>

                                <h1>Metodo de pago</h1>
                                <div className="card__form__item">
                                    <label onClick={() => setFieldValue('address', '')} >
                                        Efectivo
                                        <Field type="radio" value={'1'} name="payment_method" />
                                    </label>
                                    <label >
                                        Transferencia
                                        <Field type="radio" value={'2'} name="payment_method" />
                                    </label>
                                    <label onClick={() => setFieldValue('address', '')} >
                                        Terminal
                                        <Field type="radio" value={'3'} name="payment_method" />
                                    </label>
                                    <ErrorMessage name="payment_method" component={'span'} />
                                </div>

                                {
                                    values && values.payment_method === '1' &&
                                    <>

                                        <div className="card__form__item">
                                            <label htmlFor="name">Cantidad</label>
                                            <input type="number" onChange={(e)=>handleQuantity(e,setFieldValue)} />
                                        </div>
                                        <h1>{`Cambio: ${values.change}`}</h1>

                                    </>
                                }
                            </div>
                        </div>
                        <h1 style={{ textAlign: 'end' }}>{`Total: ${values.total}`}</h1>
                        <div className="buttons">
                            <button type="button" className="btn-cancel" onClick={resetForm} >
                                Reiniciar
                            </button>
                            <button type="submit" className="btn-add" >
                                Generar Orden
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )
}
