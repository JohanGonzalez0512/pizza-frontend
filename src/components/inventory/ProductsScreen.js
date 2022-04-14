import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { categoriesStartGetCategories } from '../../actions/category';
import { productsSetActiveProduct, productsStartDelete, productsStartGetProducts } from '../../actions/products';
import { uiSetIsModalOpen } from '../../actions/ui';
import { buildData } from '../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../helpers/isACoincidence';
import { SearchBar } from '../ui/filters/SearchBar';
import { Modal } from '../ui/Modal';
import { Table } from '../ui/Table';
import { AddProducts } from './AddProducts';




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
        title: "‎",
        textAlign: "center",
    },


];












export const ProductsScreen = () => {


    const { ui, products: { data } } = useSelector(state => state);
    const { isModalOpen } = ui;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsStartGetProducts());
        dispatch(categoriesStartGetCategories());
    }, []);




    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });
    const [dataShow, setDataShow] = useState([])


    const handleClick = (id) => {
        dispatch(productsSetActiveProduct(id))
        handleClickOpenModal();
    }
    const handleClick2 = (id) => {
        dispatch(productsStartDelete(id));
    }
    const handleClickOpenModal = () => {
        dispatch(uiSetIsModalOpen());
    }

    const generateData = () => {
        const dataToShow = [];
        const { searchWord } = valueSearchFilter;
        data.forEach(({ id, name, code, category, }) => {
            const coincidence = isACoincidenceSearch(
                [name, code, category.name],
                searchWord
            );
            const dataBuilded = buildData(id, name, code, category.name, handleClick, handleClick2, { id, name, code, category }, coincidence)

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
                    Catalogo de productos
                </h1>


                <div className='filters__container'>
                    <SearchBar valueSearchFilter={valueSearchFilter}
                        setValueSearchFilter={setValueSearchFilter}
                        placeholder={'Buscar por nombre'} />
                </div>

                <Table
                    headers={headers}
                    data={dataShow}
                    sizesColumns={[25, 25, 25, 25]}
                />


                {
                    isModalOpen &&
                    <Modal
                        Component={AddProducts}
                    />
                }
                <div className='btn__container'>
                    <button onClick={() => handleClickOpenModal()} className='btn-add'>
                        Agregar Producto
                    </button>
                </div>
            </div>
        </div>
    )


};

