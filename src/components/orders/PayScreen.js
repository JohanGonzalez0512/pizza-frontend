import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { orderGetTotal } from '../../actions/order';

import { uiSetIsModalOpen } from '../../actions/ui';
import { ListPayScreen } from '../ui/ListPayScreen';

export const PayScreen = () => {

  const dispatch = useDispatch();
  const {orders: { total, cart} } = useSelector(state => state);
  

  useEffect(() => {
    dispatch(orderGetTotal());
  }, [cart])
  
  const handleClickCancelModal = () => {
    dispatch(uiSetIsModalOpen());
  }
  return (
    <div className='PayScreen'>

      <h2 className="card__title">
        Detalles del pedido
      </h2>

      <ListPayScreen />
      <h2 >
        Total: ${total}
      </h2>
      <div className='buttons'>

      <button onClick={() => handleClickCancelModal()} className='btn-cancel'>Cancelar</button>
      <Link to={'/pedidos/pago'} className='btn-add'>Realizar Pago</Link>
      </div>
    </div>
    
  )}
