import React from 'react'

export const Select = ({ options, defaultValue, setValueSearchFilter, searchWord }) => {

    const handleInputChange = ({target}) => {
         setValueSearchFilter({searchWord: target.value});
    }
    return (
        <>

            <div className='select__container'>
                <select
                    type='select__container__select'
                    value={searchWord}
                    onChange={handleInputChange}
                >

                    <option hidden defaultValue>
                        {defaultValue}
                    </option>


                    {options.map(({ category, id }) => (
                        <option value={category} key={id}>
                            {category}
                        </option>
                    ))}
                </select>


            </div>


        </>

    )
}
