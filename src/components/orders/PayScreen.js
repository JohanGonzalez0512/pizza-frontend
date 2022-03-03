import React from 'react'
import { useDispatch } from 'react-redux';
import { uiSetIsModalOpen } from '../../actions/ui';
import { ListPayScreen } from '../ui/ListPayScreen';

export const PayScreen = () => {

  const dispatch = useDispatch();

  const handleClickCancelModal = () => {
    dispatch(uiSetIsModalOpen());
  }
  return (
    <div className='PayScreen'>

      <h2 className="card__title">
        Detalles del pedido
      </h2>

      <ListPayScreen
      />



      <button onClick={() => handleClickCancelModal()} className='btn'>Cancelar</button>
    </div>
  )
}
