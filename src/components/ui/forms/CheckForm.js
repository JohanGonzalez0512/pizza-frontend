import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const CheckForm = ({ item = [], setFieldValue, values }) => {

    const handleClickCheck = ({ target }) => {

        const { name, value } = target

        const { extras } = values

        let newAdded = true;

        const newExtras = extras.map(extra => {
            if (extra.name === name) {
                newAdded = false
                return undefined
            }
            return extra
        }).filter(extra => extra !== undefined)


        if (newAdded) {
            newExtras.push({ name, value })
        }

        setFieldValue('extras', newExtras)
    }

    return (
        <>
            {
                item.adjuncts.map(({ value, label }, index) => (
                    <label key={index} className='listIngredients__body__itemList__item'  >
                        {label}
                        <input type='checkbox' name={label} value={value} onClick={handleClickCheck} />
                        {/* <Field key={value} type={item.type} name={item.name} value={value} /> */}
                    </label>
                ))
            }
            <ErrorMessage name={item.name} />
        </>
    )
}
