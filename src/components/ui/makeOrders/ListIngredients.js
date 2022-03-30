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
        console.log(values);
        const { element, ...restValues } = values;
        dispatch(orderSetIsActive())
        dispatch(orderAddToCart({
            id: activeItem.id,
            name: activeItem.name,
            price: activeItem.price,
            idIngs: values.element instanceof Array ? values.element : [values.element],

            ingredients: ``,
            ...restValues
        }))
    }


    // const example = {
    //     id: 1,
    //     name: 'Pizza flamas 1',
    //     price: '$100',
    //     idIngs: ['id1', 'id2', 'id3'],
    //     idIngs: [{ id: 'id1', name: 'Ingrediente 1' }, { id: 'id2', name: 'Ingrediente 2' }, { id: 'id3', name: 'Ingrediente 3' }],
    //     extras: ['id1', 'id2', 'id3'],
    //     refrescos: ['id1', 'id2', 'id3'],
    //     papas: ['id1', 'id2', 'id3'],
    //     elementsToshow: [

    //     ]
    // }


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
                                                ? <RadioForm item={item} setFieldValue={setFieldValue} />
                                                : <CheckForm item={item} setFieldValue={setFieldValue} />
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

