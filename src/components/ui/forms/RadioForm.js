import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const RadioForm = ({ item = [], setFieldValue }) => {

    const handleClickRadio = (e, label) => {
        const { name, value } = e.target
        setFieldValue(
            name, { name: label, value }
        )
    }

    return (
        <>
            {
                item.adjunts.map(({ id, label }, index) => (
                    <label key={index} className='listIngredients__body__itemList__item'>
                        {label}
                        <input type='radio' name={item.name} value={id} onClick={(e) => handleClickRadio(e, label)} />
                    </label>

                ))
            }
            <ErrorMessage name={item.name} component="span"/>
        </>
    )
}
