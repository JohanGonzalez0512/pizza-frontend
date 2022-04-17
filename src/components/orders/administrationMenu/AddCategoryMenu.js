import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { uiSetIsModalOpen } from '../../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesMenuCleanActiveCategoryMenu, categoriesMenuStartCreateCategoryMenu, categoriesMenuStartUpdateCategoryMenu } from '../../../actions/categoryMenu';

export const AddCategoryMenu = () => {
    const dispatch = useDispatch();
    const handleClickCancelModal = () => {

        dispatch(uiSetIsModalOpen());
        dispatch(categoriesMenuCleanActiveCategoryMenu());
    }
    const {categoriesMenu: { activeCategory} } = useSelector(state => state);
    
    
    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
       
        initialValues: {
            name:  activeCategory ? activeCategory.name :'',  
        },
        onSubmit: (values) => {
            if (activeCategory) {
                
                dispatch(categoriesMenuStartUpdateCategoryMenu(activeCategory.id,values));
                dispatch(categoriesMenuCleanActiveCategoryMenu());
            }
            else {
                dispatch(categoriesMenuStartCreateCategoryMenu(values));
            }
            resetForm()
            handleClickCancelModal()
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Requerido'),
        })
    });


    return (
        <div className='add-category'>
            <h2 className="card__title">
                Agregar o editar una categoria
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
                            Agregar categoria
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
