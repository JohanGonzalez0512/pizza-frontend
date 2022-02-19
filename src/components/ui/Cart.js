import React from 'react'

export const Cart = ({ cart }) => {

    const totalCost = cart.reduce((acc, item) => {
        return acc + parseInt(item.price)
    }, 0)

    const totalItems = cart.length;

    if (totalItems == 0) return <></>;

    return (
        <div className='cart'>
            <div className="cart__cost">
                <div className='cart__cost__icon'>
                    <svg>
                        <use href="/sprite.svg#icon-shopping-cart"></use>
                    </svg>
                    <p>{totalItems}</p>
                </div>

                <p className='cart__cost__text'>MX ${totalCost}</p>
            </div>
            <button className="btn-add">
                Pagar
            </button>
        </div>
    )
}
