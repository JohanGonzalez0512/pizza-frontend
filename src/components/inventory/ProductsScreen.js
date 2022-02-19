import React, { useState } from 'react';
import { SearchBar } from '../ui/filters/SearchBar';
import { Select } from '../ui/filters/Select';


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

export const ProductsScreen = () => {
    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });
    return (
        <div className='container'>
            <div className='card'>
                <h1 className="card__title">
                    Productos
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
            </div>
        </div>
    )


};
