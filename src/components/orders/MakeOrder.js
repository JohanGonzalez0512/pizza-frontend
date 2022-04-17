import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { orderStartSetDataForms } from '../../actions/order';
import { Cart } from '../ui/Cart';
import { ListIngredients } from '../ui/makeOrders/ListIngredients';
import { ListMenu } from '../ui/makeOrders/ListMenu';
import { Modal } from '../ui/Modal';
import { PayScreen } from './PayScreen';

export const MakeOrder = () => {

    const { orders, ui } = useSelector(state => state);

    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderStartSetDataForms());
    }, [])
    const { orderActive, isActiveItem, options, itemListData, cart } = orders;

    console.log(itemListData)

    const { isModalOpen } = ui;

    return (
        <div className='container makeOrders'>
            <div className={`card ${isModalOpen && 'modal-active'} `}>
                <h2 className="card__title">
                    Hacer pedido
                </h2>


                {isActiveItem &&
                    <ListIngredients
                        activeItem={orderActive}
                    />
                }

                {!isActiveItem && itemListData.length > 0 &&
                    <>
                        <ListMenu
                            options={options}
                            itemListData={itemListData}
                            cart={cart}
                        />
                        <Cart cart={cart} />
                    </>
                }

                {
                    isModalOpen &&
                    <Modal
                        Component={PayScreen}
                        data={cart}
                    />
                }


            </div>
        </div >
    )
}
