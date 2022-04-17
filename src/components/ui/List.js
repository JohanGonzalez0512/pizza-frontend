import React from 'react'
import { useDispatch } from 'react-redux'
import { evauluateOrder, orderSetActive } from '../../actions/order'
export const List = ({ data, filter }) => {
    const dispatch = useDispatch()
    const { searchWord } = filter;
    const handleClick = (item) => dispatch(evauluateOrder(item))

    return (
        <div className='list'>
            {
                data.map((item, index) => (
                    <div key={item.id} className='list__itemList' >
                        <div className='list__itemList__textDescription'>
                            <h2>{item.name}</h2>
                            <p>MX ${item.price}</p>
                        </div>

                        <button
                            className='list__itemList__addItem'
                            onClick={() => handleClick(item)}
                        >
                            Agregar
                        </button>
                    </div>
                ))
            }
        </div>
    )
}
