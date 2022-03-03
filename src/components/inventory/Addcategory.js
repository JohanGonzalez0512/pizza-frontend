import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { uiSetIsModalOpen } from '../../actions/ui';
import { useDispatch } from 'react-redux';

export const Addcategory = () => {
    const dispatch = useDispatch();
    const handleClickCancelModal = () => {
        dispatch(uiSetIsModalOpen());
    }
    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            name: '',

        },
        onSubmit: (values) => {
            resetForm()
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Requerido'),
        })
    });


    return (
        <div className='add-category'>
            <h2 className="card__title">
                Agregar nueva categoria
            </h2>

            <form onSubmit={handleSubmit} className="add-category__form" >
                <div className='form__container '>

                    <div className="form__inputs">

                        <label htmlFor="name">Nombre de la categoria</label>
                        <input type="text" {...getFieldProps('name')} />
                        {touched.name && errors.name && <span>{errors.name}</span>}



                    </div>
                    <div className='btn__container'>
                        <button onClick={handleClickCancelModal} className="btn-cancel">
                            Cancelar
                        </button>
                        <button type="submit" className="btn-add">
                            Agregar producto
                        </button>
                    </div>


                </div>
            </form>
        </div>
    )
}
