import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SelectList } from '../ui/SelectList';
import { useDispatch, useSelector } from 'react-redux';
import { uiSetIsModalOpen } from '../../actions/ui';

import { stockStartCreateStock } from '../../actions/stock';



export const AddStock = () => {

    const { products: { data: products }} = useSelector(state => state);
    const [product, setProduct] = useState( {})

    const dispatch = useDispatch();
    const handleClickCancelModal = () => {
        dispatch(uiSetIsModalOpen());
    }



    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            price: '',
            expires_at:  '',
            quantity: '',
            units: '',

        },
        onSubmit: (values) => {
            dispatch(stockStartCreateStock({
                price: values.price,
                expires_at: values.expires_at,
                quantity: `${values.quantity} ${values.units}`,
            },product.id));

            resetForm()
            handleClickCancelModal()
        },
        validationSchema: Yup.object({
            quantity: Yup.string()
                .required('Requerido'),
            price: Yup.number()
                .required('Requerido'),
            expires_at: Yup.string()
                .required('Requerido'),
            units: Yup.string().required('Requerido') ,

        })
    });


    return (

        <form className='add-stock ' onSubmit={handleSubmit}>
            <h1 className="card__title">
                Añadir al catalogo de productos
            </h1>
            <div  className="card__form  " >
                <div className='col   '>

                        <div className='card__form__item'>

                            <label htmlFor="name">Precio del producto</label>
                            <input type="number" {...getFieldProps('price')} />
                            {touched.price && errors.price && <span>{errors.price}</span>}
                        </div>
                        <div className='card__form__item'>
                            <label htmlFor="code">Fecha de expiracion</label>
                            <input type="date" {...getFieldProps('expires_at')} />
                            {touched.expires_at && errors.expires_at && <span>{errors.expires_at}</span>}
                        </div>

                        <div className='card__form__item'>
                            <label htmlFor="quantity">Cantidad del producto</label>
                            <input type="number" {...getFieldProps('quantity')} />
                            {touched.quantity && errors.quantity && <span>{errors.quantity}</span>}
                        </div>
                        <div className='card__form__item'>
                            <label htmlFor="quantity">Unidad del producto</label>
                            <select {...getFieldProps('units')}>
                                <option hidden defaultValue>Seleccione una opción</option>
                                <option value="gr">gramos</option>
                                <option value="pz">pieza</option>
                            </select>
                            {touched.units && errors.units && <span>{errors.units}</span>}
                        </div>

                    </div>

                    <SelectList item={product} items={products} setItem={setProduct} />
                </div>
                <div className='btn__container'>
                    <button onClick={handleClickCancelModal} className="btn-cancel">
                        Cancelar
                    </button>
                    {Object.values(product).length > 0 &&

                        <button type="submit" className="btn-add">
                            Agregar al inventario
                        </button>
                    }
                </div>
           
        </form>

    )
}
