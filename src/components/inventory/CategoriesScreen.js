import React, { useEffect, useState } from 'react';
import { buildData } from '../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../helpers/isACoincidence';
import { SearchBar } from '../ui/filters/SearchBar';
import { Select } from '../ui/filters/Select';
import { Table } from '../ui/Table';


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
        title: "ver",
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
            const dataBuilded = buildData(name, code, category, date_expiraiton, quantity, price,coincidence)

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
    }, [data,valueSearchFilter]);


   
    return (
        <div className='container'>
            <div className='card'>
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
               



            </div>
        </div>
    )


};
