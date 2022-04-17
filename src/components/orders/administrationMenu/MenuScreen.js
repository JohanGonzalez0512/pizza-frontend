import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesMenuSetActiveCategoryMenu, categoriesMenuStartDelete, categoriesMenuStartGetCategoriesMenu } from '../../../actions/categoryMenu';
import { menuSetActiveItemMenu, menuStartDelete, menuStartGetItemsMenu } from '../../../actions/menu';
import { productsStartGetProducts } from '../../../actions/products';
import { uiSetIsModalOpen } from '../../../actions/ui';
import { buildDataMenu } from '../../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../../helpers/isACoincidence';
import { SearchBar } from '../../ui/filters/SearchBar';
import { Modal } from '../../ui/Modal';
import { Table } from '../../ui/Table';
import { AddItemMenu } from './AddItemMenu';




const headers = [
    {
        title: "Nombre",
        textAlign: "left",
    },
    {
        title: "Precio",
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






export const MenuScreen = () => {

    const { ui, menu : { data } } = useSelector(state => state);
    const { isModalOpen } = ui;

    useEffect(() => {
        dispatch(menuStartGetItemsMenu());
        dispatch(productsStartGetProducts());
        dispatch(categoriesMenuStartGetCategoriesMenu());
    }, []);


    const dispatch = useDispatch();
    

    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });
    const [dataShow, setDataShow] = useState([])


    const handleClick = (id) => {
        dispatch(menuSetActiveItemMenu(id))
        handleClickOpenModal();
        
    }
    
    const handleClick2 = (id) => {
        dispatch(menuStartDelete(id));
    }



    const generateData = () => {
        const dataToShow = [];
        const { searchWord } = valueSearchFilter;
        data.forEach(({ id, name, price, category, products , is_pre_built}) => {
            const coincidence = isACoincidenceSearch(
                [name, price, category.name],
                searchWord
            );
            const dataBuilded = buildDataMenu(id, name, category.name, price, handleClick, handleClick2, {id, name, price, category, products, is_pre_built}, coincidence)

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


    const handleClickOpenModal = () => {
        dispatch(uiSetIsModalOpen());
    }



    return (
        <div className='container'>
            <div className={`card ${isModalOpen && 'modal-active'}`} >
                <h1 className="card__title">
                    Menu
                </h1>
                <div className='filters__container'>
                    <SearchBar
                        valueSearchFilter={valueSearchFilter}
                        setValueSearchFilter={setValueSearchFilter}
                        placeholder={'Buscar por nombre'} />
                </div>

                <Table
                    headers={headers}
                    data={dataShow}
                    sizesColumns={[30, 30, 25 ,15]}
                />
                {
                    isModalOpen &&
                    <Modal
                        Component={AddItemMenu}
                    />
                }
                <div className='btn__container'>
                    <button onClick={() => handleClickOpenModal()} className='btn-add'>
                        Agregar producto
                    </button>
                </div>

            </div>
        </div>
    )


};
