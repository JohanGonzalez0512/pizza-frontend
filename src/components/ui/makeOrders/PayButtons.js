import React from 'react'

export const PayButtons = ({
    handleMinusQuantity,
    handleAddQuantity,
    handleDeleteItem,
    index,
    item,
}) => {
    return (
        <div className='list__itemList__interactions'>
            <div className='list__itemList__interactions__buttons'>
                <svg onClick={() => handleMinusQuantity(index)} className="list__itemList__icon">
                    <use href="/sprite.svg#icon-minus"></use>
                </svg>
                <h2>{item.quantity}</h2>
                <svg onClick={() => handleAddQuantity(index)} className="list__itemList__icon">
                    <use href="/sprite.svg#icon-plus"></use>
                </svg>
            </div>
            <div className='list__itemList__interactions__price'>
                <h2>MX ${item.price}</h2>
                <svg onClick={() => handleDeleteItem(index)} className="list__itemList__icon delete">
                    <use href="/sprite.svg#icon-trash"></use>
                </svg>
            </div>
        </div>
    )
}
