import React from 'react'
import { useDispatch } from 'react-redux'
export const ItemList = ({ data }) => {

    const dispatch = useDispatch();

    const handleClick = (data) => {
        // dispatch({ type: 'ADD_ITEM', payload: data })
        console.log(data)
    }

    return (
        <div className='itemList'>
            <div className='itemList__textDescription'>
                <h2>{data.name}</h2>
                <p>MX ${data.price}</p>
            </div>

            <button
                className='itemList__addItem'
                onClick={() => handleClick(data)}
            >
                Agregar
            </button>
        </div>
    )
}
