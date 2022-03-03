import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { buildData } from '../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../helpers/isACoincidence';
import { SearchBar } from '../ui/filters/SearchBar';
import { Select } from '../ui/filters/Select';
import { Table } from '../ui/Table';


const options = [
    {

        id: 1,
        category: "Combos",
    },
    {
        id: 0,
        category: "Pizzas",
    },
    {
        id: 10,
        category: "fsdfds",
    },
    {
        id: 3,
        category: "sdfdsfdsf",
    },

]



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
        title: "‎",
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

export const ProductsScreen = () => {
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
                    Catalogo de productos
                </h1>


                <div className='filters__container'>
                    <Select
                        options={options}
                        setValueSearchFilter={setValueSearchFilter}
                        defaultValue={'Buscar por categoria'} />
                    <SearchBar valueSearchFilter={valueSearchFilter}
                        setValueSearchFilter={setValueSearchFilter}
                        placeholder={'Buscar por nombre'} />
                </div>

                <Table
                        headers={headers}
                        data={dataShow}
                        sizesColumns={[14, 14, 14, 14, 14, 14, 14]}
                    />
                    <div className='btn__container'>
                        <Link to={'/inventario/agregar-catalogo'} className='btn-add'>
                            Agregar producto
                        </Link>
                    </div>
            </div>
        </div>
    )


};
