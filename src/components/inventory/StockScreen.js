import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsStartGetProducts } from '../../actions/products';
import { stockStartDelete, stockStartGetStock } from '../../actions/stock';
import { uiSetIsModalOpen } from '../../actions/ui';
import { buildDataStock } from '../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../helpers/isACoincidence';
import { SearchBar } from '../ui/filters/SearchBar';
import { Modal } from '../ui/Modal';
import { Table } from '../ui/Table';
import { AddStock } from './AddStock';




const headers = [
  {
    title: "Nombre",
    textAlign: "center",
  },
  {
    title: "Codigo",
    textAlign: "center",
  },
  {
    title: "Categoria",
    textAlign: "center",
  },
  {
    title: "Expiracion",
    textAlign: "center",
  },
  {
    title: "Cantidad",
    textAlign: "center",
  },
  {
    title: "Precio",
    textAlign: "center",
  },
  {
    title: "‎",
    textAlign: "center",
  },


];












export const StockScreen = () => {


  const { ui, stock: { data } } = useSelector(state => state);
  const { isModalOpen } = ui;

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(stockStartGetStock());
    dispatch(productsStartGetProducts());

  }, []);




  const [valueSearchFilter, setValueSearchFilter] = useState({
    searchWord: "",
  });
  const [dataShow, setDataShow] = useState([])


 
  const handleClick = (id) => {
    dispatch(stockStartDelete(id));
  }
  const handleClickOpenModal = () => {
    dispatch(uiSetIsModalOpen());
  }

  const generateData = () => {
    const dataToShow = [];
    const { searchWord } = valueSearchFilter;
    data.forEach(({ id, product, price, category, quantity, expires_at }) => {
      const coincidence = isACoincidenceSearch(
        [product.name, product.code, product.category.name, price],
        searchWord
      );
    
      const dataBuilded = buildDataStock(id, product.name, product.code,
        product.category.name, price, quantity, expires_at,
        handleClick, 
        coincidence)

      if (searchWord === "") {
        dataToShow.push(dataBuilded);
      } else if (coincidence.includes(true)) {
        dataToShow.push(dataBuilded);
      }

    });

    setDataShow(dataToShow)
  }

  useEffect(() => {
    generateData()
  }, [data, valueSearchFilter]);







  return (
    <div className='container'>
      <div className={`card ${isModalOpen && 'modal-active'}`} >
        <h1 className="card__title">
          Inventario
        </h1>


        <div className='filters__container'>
          <SearchBar valueSearchFilter={valueSearchFilter}
            setValueSearchFilter={setValueSearchFilter}
            placeholder={'Buscar por nombre'} />
        </div>

        <Table
          headers={headers}
          data={dataShow}
          sizesColumns={[16, 14, 14, 18, 14, 14, 10]}
        />


        {
          isModalOpen &&
          <Modal
            Component={AddStock}
          />
        }
        <div className='btn__container'>
          <button onClick={() => handleClickOpenModal()} className='btn-add'>
            Agregar Al inventario
          </button>
        </div>
      </div>
    </div>
  )


};



