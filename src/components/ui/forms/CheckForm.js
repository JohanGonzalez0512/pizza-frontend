import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const CheckForm = ({ item = [], setFieldValue, values }) => {

    const handleClickCheck = ({ target }) => {

        const { name, value } = target
        const data = values[item.name]

        let newAdded = true;

        const newExtras = data.map(extra => {
            if (extra.name === name) {
                newAdded = false
                return undefined
            }
            return extra
        }).filter(extra => extra !== undefined)


        if (newAdded) {
            newExtras.push({ name, value })
        }

        setFieldValue(item.name, newExtras)
    }

    return (
        <>
            {
                item.adjunts.map(({ id, label }, index) => (
                    <label key={index} className='listIngredients__body__itemList__item'  >
                        {label}
                        <input type='checkbox' name={label} value={id} onClick={handleClickCheck} />
                        {/* <Field key={value} type={item.type} name={item.name} value={value} /> */}
                    </label>
                ))
            }
            <ErrorMessage name={item.name} component="span"/>
        </>
    )
}
