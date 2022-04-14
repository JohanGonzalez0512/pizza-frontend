import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SelectList } from '../ui/SelectList';
import { useDispatch, useSelector } from 'react-redux';
import { uiSetIsModalOpen } from '../../actions/ui';
import { productsCleanActiveProduct, productsStartCreateProduct, productsStartUpdateProduct } from '../../actions/products';



export const AddProducts = () => {

    const { categories: { data: categories }, products: { activeProduct } } = useSelector(state => state);
    const [category, setCategory] = useState(activeProduct ? activeProduct.category : {})



    const dispatch = useDispatch();
    const handleClickCancelModal = () => {
        dispatch(uiSetIsModalOpen());
        dispatch(productsCleanActiveProduct())
    }



    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            name: activeProduct ? activeProduct.name : '',
            code: activeProduct ? activeProduct.code : '',

        },
        onSubmit: (values) => {
            if (activeProduct) {
                dispatch(productsStartUpdateProduct(activeProduct.id, values, category.id));
                dispatch(productsCleanActiveProduct())
            }
            else {
                dispatch(productsStartCreateProduct(values, category.id));
            }

            resetForm()
            handleClickCancelModal()
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Requerido'),
            code: Yup.string()
                .required('Requerido'),
        })
    });


    return (

        <div className='add_category '>
            <h1 className="card__title">
                Añadir al catalogo de productos
            </h1>


            <form onSubmit={handleSubmit} className="form " >
                <div className='form__container scroll'>

                    <div className="form__inputs">

                        <div className='form__inputs__input'>

                            <label htmlFor="name">Nombre del producto</label>
                            <input type="text" {...getFieldProps('name')} />
                            {touched.name && errors.name && <span>{errors.name}</span>}
                        </div>

                        <div className='form__inputs__input'>
                            <label htmlFor="code">Codigo del producto</label>
                            <input type="text" {...getFieldProps('code')} />
                            {touched.code && errors.code && <span>{errors.code}</span>}
                        </div>

                    </div>

                    <SelectList item={category} items={categories} setItem={setCategory} />
                </div>
                <div className='btn__container'>
                    <button onClick={handleClickCancelModal} className="btn-cancel">
                        Cancelar
                    </button>
                    {Object.values(category).length > 0 &&

                        <button type="submit" className="btn-add">
                            Agregar producto
                        </button>
                    }
                </div>
            </form>
        </div>

    )
}
