import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Cart } from '../ui/Cart';
import { ListIngredients } from '../ui/makeOrders/ListIngredients';
import { ListMenu } from '../ui/makeOrders/ListMenu';
import { Modal } from '../ui/Modal';
import { PayScreen } from './PayScreen';

export const MakeOrder = () => {

    const { orders, ui } = useSelector(state => state);

    const { orderActive, isActiveItem, options, itemListData, cart } = orders;

    const { isModalOpen } = ui;
    
    return (
        <div className='container makeOrders'>
            <div className={`card ${isModalOpen && 'modal-active'} `}>
                <h1 className="card__title">
                    Hacer pedido
                </h1>


                {isActiveItem &&
                    <ListIngredients
                        activeItem={orderActive}
                    />
                }

                {!isActiveItem &&
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
