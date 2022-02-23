import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { orderAddToCart, orderSetActive, orderSetIsActive } from '../../../actions/order';

export const ListIngredients = ({ activeItem = {} }) => {

    const dispatch = useDispatch();
    const [ingredients, setIngredients] = useState({})
    const [ingredientsToShow, setingredientsToShow] = useState('')

    const handleClickRadio = (name, value) => {
        setIngredients(prev => ({ ...prev, [name]: value }))
    }

    useEffect(() => {
        const values = Object.values(ingredients);
        values.map(values => `${values}`);
        setingredientsToShow(values.join(', ') || 'Seleccione los ingredientes de su pizza')
    }, [ingredients])

    const handleClickAddCart = () => {
        dispatch(orderSetIsActive())
        dispatch(orderAddToCart({
            ...activeItem,
            idIngs:ingredientsToShow.split(', '),
        }))
    }

    const handleClickCancel = () => {
        dispatch(orderSetActive({}))
    }

    return (
        <div className='listIngredients'>
            <div className='listIngredients__body'>
                {activeItem.elements.map((item, index) => (
                    <div key={item.header + index} className='listIngredients__body__itemList' >
                        <h2>{item.header}</h2>
                        {item.adjuncts.map((ingredient, index) => (
                            <div key={ingredient} className="listIngredients__body__itemList__item" onClick={() => handleClickRadio(item.header, ingredient)}>
                                <p >{ingredient}</p>
                                <input type="radio" name={item.header} readOnly={ingredient} checked={ingredients[item.header] === ingredient} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className='listIngredients__footer'>
                <h3>
                    {ingredientsToShow}
                </h3>
                <button className='btn-add' onClick={handleClickCancel}>Cancelar</button>
                <button className='btn-add' onClick={handleClickAddCart}>Aceptar</button>
            </div>
        </div >
    )
}
