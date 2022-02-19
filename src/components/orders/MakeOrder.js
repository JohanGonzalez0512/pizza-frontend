import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Cart } from '../ui/Cart';
import { ListIngredients } from '../ui/makeOrders/ListIngredients';
import { ListMenu } from '../ui/makeOrders/ListMenu';

export const MakeOrder = () => {

    const { orderActive, isActiveItem, options, itemListData, cart } = useSelector(state => state.orders);


    return (
        <div className='container makeOrders'>
            <div className='card'>
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


            </div>
        </div >
    )
}
