import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { orderAddToCart, orderSetActive, orderSetIsActive } from '../../../actions/order';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationsInputs } from '../../../helpers/validationsInputs';
import { RadioForm } from '../forms/RadioForm';
import { CheckForm } from '../forms/CheckForm';
import { FooterForm } from '../forms/FooterForm';

export const ListIngredients = ({ activeItem = {} }) => {

    const dispatch = useDispatch();




    const [initialValues, validationSchema] = validationsInputs(activeItem.elements);


    //TODO: TRAER TODA LA DATA DE LOS INGREDIENTES


    const handleClickAddCart = (values) => {
        dispatch(orderSetIsActive())
        dispatch(orderAddToCart(values))
    }


    return (
        <div className='listIngredients'>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={handleClickAddCart}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        <div className='listIngredients__body'>
                            {console.log(values)}
                            {
                                Object.values(activeItem.elements).map((item) => (
                                    <div key={item.header} className='listIngredients__body__itemList' >
                                        <h2>{item.header}</h2>
                                        {
                                            item.type === 'radio'
                                                ? <RadioForm item={item} setFieldValue={setFieldValue} values={values} />
                                                : <CheckForm item={item} setFieldValue={setFieldValue} values={values} />
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        <FooterForm />
                    </Form>
                )}
            </Formik>
        </div >
    )

}

