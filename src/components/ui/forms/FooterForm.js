import React from 'react'
import { useDispatch } from 'react-redux';
import { orderSetActive } from '../../../actions/order';

export const FooterForm = () => {

    const dispatch = useDispatch();

    const handleClickCancel = () => {
        dispatch(orderSetActive({}))
    }


    return (
        <div className='listIngredients__footer'>
            <h3>
                {'Seleccione los ingredientes de su pizza y/o aditamentos'}
            </h3>
            <div className='buttons'>

            <button className='btn-cancel' onClick={handleClickCancel}>Cancelar</button>
            <button className='btn-add' type='submit'>Aceptar</button>
            </div>
        </div>
    )
}
