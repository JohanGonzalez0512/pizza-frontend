import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const CheckForm = ({ item = [], setFieldValue, values }) => {

    const handleClickCheck = ({ target }) => setFieldValue('extras', [target.name, target.value])

// d
//     extras : [ 'id1', 'label' ]
//     lbels : [ 
//         {
//             name : 'extras',
//             labels : [ 'label1', 'label2' ]
//         }
//         ,{
//             name : 'refrescos',
//             labels : [ 'label1', 'label2' ]
//         } ]



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
