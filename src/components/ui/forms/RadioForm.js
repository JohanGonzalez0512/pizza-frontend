import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const RadioForm = ({item = []}) => {
    return (
        <>
            {
                item.adjuncts.map(({ value, label }, index) => (
                    <label key={index} className='listIngredients__body__itemList__item'>
                        {label}
                        <Field key={value} type={item.type} name={item.name} value={value} />
                    </label>

                ))
            }
            <ErrorMessage name={item.name} />
        </>
    )
}
