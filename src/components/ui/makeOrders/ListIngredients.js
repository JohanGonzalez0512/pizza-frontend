import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { orderAddToCart, orderSetActive, orderSetIsActive } from '../../../actions/order';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationsInputs } from '../../../helpers/validationsInputs';

export const ListIngredients = ({ activeItem = {} }) => {

    const dispatch = useDispatch();
    const [ingredients, setIngredients] = useState({})
    const [ingredientsToShow, setingredientsToShow] = useState('')


    const [initialValues, validationSchema] = validationsInputs(activeItem.elements);


    const handleClickRadio = (name, value) => {
        setIngredients(prev => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        const values = Object.values(ingredients);
        values.map(values => `${values}`);
        setingredientsToShow(values.join(', ') || 'Seleccione los ingredientes de su pizza')
    }, [ingredients])

    const handleClickAddCart = () => {
        dispatch(orderSetIsActive())
        dispatch(orderAddToCart({
            ...activeItem,
            idIngs: ingredientsToShow.split(', '),
            ingredients: ` ${ingredientsToShow} `
        }))
    }

    const handleClickCancel = () => {
        dispatch(orderSetActive({}))
    }
   
    return (
        <div className='listIngredients'>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleClickAddCart}
            >
                {({ values }) => (

                    <Form>
                        <div className='listIngredients__body'>
                            {
                                Object.values(activeItem.elements).map((item, index) => (
                                    <div key={item.header} className='listIngredients__body__itemList' >
                                        <h2>{item.header}</h2>
                                       {
                                            item.type === 'radio' && <>

                                                {
                                                    item.adjuncts.map(({ value, label }, index) => (
                                                        <label key={index} className='listIngredients__body__itemList__item' onClick={()=>handleClickRadio(item.header,label)}>
                                                            {label}
                                                            <Field key={value} type={item.type} name={item.name} value={value} />
                                                        </label>

                                                    ))
                                                }
                                                <ErrorMessage name={item.name} />
                                            </>

                                        } 
                                    </div>
                                ))
                            }
                        </div>
                        <div className='listIngredients__footer'>
                            <h3>
                                {ingredientsToShow}
                            </h3>
                            <button className='btn-add' onClick={handleClickCancel}>Cancelar</button>
                            <button className='btn-add' type='submit'>Aceptar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div >
    )

}

