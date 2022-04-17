import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SelectList } from '../../ui/SelectList';
import { useDispatch, useSelector } from 'react-redux';
import { uiSetIsModalOpen } from '../../../actions/ui';
import { MultiSelect } from "react-multi-select-component";
import { menuCleanActiveItemMenu, menuStartCreateItemMenu, menuStartUpdateItemMenu } from '../../../actions/menu';




export const AddItemMenu = () => {

    const { categoriesMenu: { data: categories }, products: { data }, menu: { activeItemMenu } } = useSelector(state => state);
    const [category, setCategory] = useState(activeItemMenu ? activeItemMenu.category : {})
    const [options, setOptions] = useState([])
    const [product, setProduct] = useState([])

    const dispatch = useDispatch();
    const handleClickCancelModal = () => {
        dispatch(uiSetIsModalOpen());
        dispatch(menuCleanActiveItemMenu())
    }

    const generateOptionsProducts = (set, arr) => {
        set(arr.map(product => {
            return {
                value: product.id,
                label: product.name
            }
        }))
    }
    useEffect(() => {
        generateOptionsProducts(setOptions, data)
        if (activeItemMenu) {
            generateOptionsProducts(setProduct, activeItemMenu.products)
        }
    }, [data, activeItemMenu])


    const { handleSubmit, errors, touched, getFieldProps, resetForm, } = useFormik({
        initialValues: {
            name: activeItemMenu ? activeItemMenu.name : '',
            price: activeItemMenu ? activeItemMenu.price : '',
            is_pre_built: false
            // activeItemMenu ? activeItemMenu.is_pre_built :
        },
        onSubmit: (values) => {


            if (activeItemMenu){
                dispatch(menuStartUpdateItemMenu({
                    ...values,
                    category: {
                        id: category.id
                    },
                    products: product.map(product => {
                        return {
                            id: product.value
                        }
                    })
                }, activeItemMenu.id))
            }else {

                dispatch(menuStartCreateItemMenu({
                    ...values,
                    category: {
                        id: category.id
                    },
                    products: product ? product.map(product => {
                        return {
                            id: product.value
                        } 
                    }): []
                }));
            }

            resetForm()
            handleClickCancelModal()
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Requerido'),
            price: Yup.number()
                .required('Requerido'),
            is_pre_built: Yup.boolean().optional(),

        })
    });


    return (

        <form className='add-stock ' onSubmit={handleSubmit}>
            <h1 className="card__title">
                Añadir Productos Al Menu
            </h1>
            <div className="card__form  scroll" >
                <div className='col   '>

                    <div className='card__form__item'>

                        <label htmlFor="name">Nombre del producto</label>
                        <input type="text" {...getFieldProps('name')} />
                        {touched.name && errors.name && <span>{errors.name}</span>}
                    </div>

                    <div className='card__form__item'>
                        <label htmlFor="price">Precio del producto</label>
                        <input type="number" {...getFieldProps('price')} />
                        {touched.price && errors.price && <span>{errors.price}</span>}
                    </div>
                    <div className='card__form__item'>
                        <label>
                        <input type="checkbox" name='is_pre_built' {...getFieldProps('is_pre_built')} />
                            ¿No poder añadir elementos extra?
                        </label>
                        {touched.is_pre_built && errors.is_pre_built && <span>{errors.is_pre_built}</span>}
                    </div>


                    <div className='card__form__item '>
                    <label htmlFor="price">Productos del inventario</label>
                        <MultiSelect
                            overrideStrings={{
                                "selectSomeItems": "Seleecione algunos productos",
                                "allItemsAreSelected": "Se seleccionaron todos los productos",
                                "search": "Buscar",
                            }}
                            options={options}
                            className="multi-select"
                            hasSelectAll={false}
                            value={product}
                            onChange={setProduct}
                            placeholder="Seleccione un producto"

                        />

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
                        Agregar al menu
                    </button>
                }
            </div>

        </form>

    )
}