import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderAddQuantity, orderDeleteQuantity } from '../../actions/order';

export const ListPayScreen = () => {
    const { orders, ui } = useSelector(state => state);
    const { cart } = orders;
    const dispatch = useDispatch();
    const handleAddQuantity = (item) => {
        dispatch(orderAddQuantity(item))
    }
    const handleMinusQuantity = (item) => {
        dispatch(orderDeleteQuantity(item))
    }
    return (
        <div className='list'>
            {
                cart.map((item, index) => (
                    <div key={index} className='list__itemList' >
                        <div className='list__itemList__textDescription'>
                            <h2>{item.name}</h2>

                            <div className='list__itemList__textDescription__bottom-text'>
                                {

                                    item.idIngs.map((ingredient, i) => (
                                        <p key={i}>{ingredient}</p>
                                    ))
                                }
                            </div>

                        </div>
                        <div className='list__itemList__interactions'>

                            <svg onClick={() => handleMinusQuantity(item)} className="list__itemList__icon">
                                <use   href="/sprite.svg#icon-minus"></use>
                            </svg>
                            <h2>{item.quantity}</h2>
                            <svg onClick={() => handleAddQuantity(item)} className="list__itemList__icon">
                                <use  href="/sprite.svg#icon-plus"></use>
                            </svg>
                            <h2>MX ${item.price}</h2>
                            <svg className="list__itemList__icon delete">
                                <use  href="/sprite.svg#icon-trash"></use>
                            </svg>

                        </div>

                        {/* <button
                        orderDeleteQuantity
                            className='list__itemList__addItem'
                            onClick={() => handleClick(item)}
                        >
                            Agregar
                        </button> */}
                    </div>
                ))
            }
        </div>


    )
}
