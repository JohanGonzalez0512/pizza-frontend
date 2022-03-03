import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiSetIsModalOpen } from '../../actions/ui';
import { buildData } from '../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../helpers/isACoincidence';
import { SearchBar } from '../ui/filters/SearchBar';
import { Modal } from '../ui/Modal';
import { Table } from '../ui/Table';
import { Addcategory } from './Addcategory';


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
        title: "VIable hasta",
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
        title: "Ver",
        textAlign: "center",
    },


];






const data = [
    {
        name: 'Pizza',
        code: '1234',
        category: 'combos',
        date_expiraiton: '10/21/2021',
        quantity: '20',
        price: '$500'
    },
    {
        name: 'Pizza',
        code: '1234',
        category: 'combos',
        date_expiraiton: '10/21/2021',
        quantity: '20',
        price: '$500'
    },
    {
        name: 'Pizza',
        code: '1234',
        category: 'combos',
        date_expiraiton: '10/21/2021',
        quantity: '20',
        price: '$500'
    },
    {
        name: 'Pizza',
        code: '1234',
        category: 'combos',
        date_expiraiton: '10/21/2021',
        quantity: '20',
        price: '$500'
    },
    {
        name: 'Pizza',
        code: '1234',
        category: 'combos',
        date_expiraiton: '10/21/2021',
        quantity: '20',
        price: '$500'
    },
    {
        name: 'Pizza',
        code: '1234',
        category: 'combos',
        date_expiraiton: '10/21/2021',
        quantity: '20',
        price: '$500'
    },
    {
        name: 'Pizza',
        code: '1234',
        category: 'combos',
        date_expiraiton: '10/21/2021',
        quantity: '20',
        price: '$500'
    },



]

export const CategoriesScreen = () => {

    const { ui } = useSelector(state => state);
    const { isModalOpen } = ui;

    const dispatch = useDispatch();


    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });
    const [dataShow, setDataShow] = useState([])


    const { searchWord } = valueSearchFilter



    const generateData = () => {
        const dataToShow = [];
        const { searchWord } = valueSearchFilter;
        data.forEach(({ name, code, category, date_expiraiton, quantity, price }) => {
            const coincidence = isACoincidenceSearch(
                [name, code, category, quantity, price],
                searchWord
            );
            const dataBuilded = buildData(name, code, category, date_expiraiton, quantity, price, coincidence)

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
                    <SearchBar valueSearchFilter={valueSearchFilter}
                        setValueSearchFilter={setValueSearchFilter}
                        placeholder={'Buscar por nombre'} />
                </div>

                <Table
                    headers={headers}
                    data={dataShow}
                    sizesColumns={[14, 14, 14, 14, 14, 14, 14]}
                />
                {
                    isModalOpen &&
                    <Modal
                        Component={Addcategory}
                    />
                }
                <div className='btn__container'>
                        <button onClick={()=>handleClickOpenModal()}className='btn-add'>
                            Agregar categoria
                        </button>
                    </div>







            </div>
        </div>
    )


};
