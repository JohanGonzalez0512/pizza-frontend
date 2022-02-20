import React from 'react'
import { useDispatch } from 'react-redux';
import { uiSetIsModalOpen } from '../../actions/ui';

export const Cart = ({ cart }) => {

    const dispatch = useDispatch();
    const totalCost = cart.reduce((acc, item) => {
        return acc + parseInt(item.price)
    }, 0)
    const handleClickPayItems = () => {
        dispatch(uiSetIsModalOpen());
    }

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
            <button
                className="btn-add"
                onClick={handleClickPayItems}
            >
                Pagar
            </button>
        </div>
    )
}
