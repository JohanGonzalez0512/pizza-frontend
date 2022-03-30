import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const RadioForm = ({ item = [], setFieldValue }) => {

    const handleClickRadio = (e, label) => {
        const { name, value } = e.target
        setFieldValue(
            name, { name: label, value: value }
        )
    }

    return (
        <>
            {
                item.adjuncts.map(({ value, label }, index) => (
                    <label key={index} className='listIngredients__body__itemList__item'>
                        {label}
                        <input type='radio' name={item.name} value={value} onClick={(e) => handleClickRadio(e, label)} />
                    </label>

                ))
            }
            <ErrorMessage name={item.name} />
        </>
    )
}
