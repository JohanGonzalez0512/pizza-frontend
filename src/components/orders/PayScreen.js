import React from 'react'
import { useDispatch } from 'react-redux';
import { uiSetIsModalOpen } from '../../actions/ui';

export const PayScreen = () => {

  const dispatch = useDispatch();

  const handleClickCancelModal = () => {
    dispatch(uiSetIsModalOpen());
}
  return (
    <>
        <h1>PayScreen</h1>
        <button onClick={()=>handleClickCancelModal()} className='btn'>Cancelar</button>
    </>
  )
}
