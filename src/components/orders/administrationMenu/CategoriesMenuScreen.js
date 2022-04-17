import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesMenuSetActiveCategoryMenu, categoriesMenuStartDelete, categoriesMenuStartGetCategoriesMenu } from '../../../actions/categoryMenu';
import { uiSetIsModalOpen } from '../../../actions/ui';
import { builDataCategories } from '../../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../../helpers/isACoincidence';
import { SearchBar } from '../../ui/filters/SearchBar';
import { Modal } from '../../ui/Modal';
import { Table } from '../../ui/Table';
import { AddCategoryMenu } from './AddCategoryMenu';



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



export const CategoriesMenuScreen = () => {

    const { ui, categoriesMenu : {data } } = useSelector(state => state);
    const { isModalOpen } = ui;

    useEffect(() => {
        dispatch(categoriesMenuStartGetCategoriesMenu());
    }, []);


    const dispatch = useDispatch();
    

    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });
    const [dataShow, setDataShow] = useState([])


    const handleClick = (id) => {
        dispatch(categoriesMenuSetActiveCategoryMenu(id))
        handleClickOpenModal();
        
    }
    
    const handleClick2 = (id) => {
        // console.log(id)
        dispatch(categoriesMenuStartDelete(id));
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
                    Categorias Del Menu
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
                        Component={AddCategoryMenu}
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
