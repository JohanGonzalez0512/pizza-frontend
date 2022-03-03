import React from 'react'
import { useSelector } from 'react-redux'

export const ListPayScreen = () => {
    const { orders, ui } = useSelector(state => state);
    const {cart}= orders;
    console.log(cart)
    return (
        <div className='list'>
            {
                cart.map((item, index) => (
                    <div key={item.id} className='list__itemList' >
                        <div className='list__itemList__textDescription'>
                            <h2>{item.name}</h2>
                            {
                                item.idIngs.map((ingredient, i) => (
                                   <p key={i}>{ingredient}</p> 
                                ))
                            }
                        </div>
                        <div className='list__itemList__interactions'>

                        </div>

                        {/* <button
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
