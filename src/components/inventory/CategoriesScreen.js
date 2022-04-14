import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesSetActiveCategory, categoriesStartDelete, categoriesStartGetCategories } from '../../actions/category';
import { uiSetIsModalOpen } from '../../actions/ui';
import { builDataCategories } from '../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../helpers/isACoincidence';
import { SearchBar } from '../ui/filters/SearchBar';
import { Modal } from '../ui/Modal';
import { Table } from '../ui/Table';
import { Addcategory } from './Addcategory';


const headers = [
    {
        title: "Nombre",
        textAlign: "left",
    },

    {
        title: "‎",
        textAlign: "center",
    },

];


const data = [
    {
        id: 1,
        name: 'Pizza',

    },
    {
        id: 2,
        name: 'Pizza',

    },




]

export const CategoriesScreen = () => {

    const { ui, categories: {data } } = useSelector(state => state);
    const { isModalOpen } = ui;

    useEffect(() => {
        dispatch(categoriesStartGetCategories());
    }, []);


    const dispatch = useDispatch();
    

    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });
    const [dataShow, setDataShow] = useState([])


    const handleClick = (id) => {
        dispatch(categoriesSetActiveCategory(id))
        handleClickOpenModal();
    }
    
    const handleClick2 = (id) => {
        dispatch(categoriesStartDelete(id));
    }



    const generateData = () => {
        const dataToShow = [];
        const { searchWord } = valueSearchFilter;
        data.forEach(({ id, name }) => {
            const coincidence = isACoincidenceSearch(
                [name],
                searchWord
            );
            const dataBuilded = builDataCategories(id, name, handleClick, handleClick2,{id, name}, coincidence)

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
                    Categorias
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
                    sizesColumns={[80, 20]}
                />
                {
                    isModalOpen &&
                    <Modal
                        Component={Addcategory}
                    />
                }
                <div className='btn__container'>
                    <button onClick={() => handleClickOpenModal()} className='btn-add'>
                        Agregar categoria
                    </button>
                </div>

            </div>
        </div>
    )


};
