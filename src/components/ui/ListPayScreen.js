import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderAddQuantity, orderDeleteItemCart, orderMinusQuantity } from '../../actions/order';
import Marquee from "react-fast-marquee";
import { uiSetIsModalOpen } from '../../actions/ui';
import { PayButtons } from './makeOrders/PayButtons';
export const ListPayScreen = () => {
    const { orders, ui } = useSelector(state => state);
    const { cart } = orders;
    const dispatch = useDispatch();

    const handleAddQuantity = (index) => {
        dispatch(orderAddQuantity(index));
    }

    const handleMinusQuantity = (index) => {
        dispatch(orderMinusQuantity(index));
    }

    const handleDeleteItem = (index) => {
        dispatch(orderDeleteItemCart(index));
        if (cart.length <= 1) {

            dispatch(uiSetIsModalOpen());
        }
    }


    return (
        <div className='list'>
            {
                cart.map((item, index) => (
                    <div key={index} className='list__itemList scroll'>
                        <div className='list__itemList__textDescription'>
                            <h2>{item.name}</h2>
                            <div className='list__itemList__textDescription__bottom-text'>
                              {

                                item.element && <>
                                <p className='list__itemList__textDescription__bottom-text-mainIngredient'>
                                    {item.element.name}
                                </p>
                                <p className='list__itemList__textDescription__bottom-text-extras'>
                                    {
                                        item.extras.reduce((prev, curr) => (
                                            prev + ' - ' + curr.name
                                        ), '')
                                    }
                                </p>
                                </>
                                 }
                                <p className='list__itemList__textDescription__bottom-text-price'>
                                    MX ${item.startPrice}
                                </p>

                            </div>

                        </div>
                        <PayButtons
                            handleAddQuantity={handleAddQuantity}
                            handleMinusQuantity={handleMinusQuantity}
                            handleDeleteItem={handleDeleteItem}
                            index={index}
                            item={item}
                        />


                    </div>
                ))
            }
        </div>


    )
}
