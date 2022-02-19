import React, { useState } from 'react'

import { SearchBar } from '../ui/filters/SearchBar';
import { Select } from '../ui/filters/Select';
import { ItemList } from '../ui/ItemList';


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


const itemListData = [
    {
        id:1,
        name:'pizza flamas',
        price:'800'
    },
    {
        id:2,
        name:'pizza flamas2',
        price:'800'
    },
    {
        id:3,
        name:'pizza flamas3',
        price:'800'
    },
    {
        id:4,
        name:'pizza flamas4',
        price:'800'
    }
]

export const MakeOrder = () => {


    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });
    return (
        <div className='container'>
            <div className='card'>
                <h1 className="card__title">
                    Hacer pedido
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


                {
                    itemListData.map((item, index) => {
                        return <ItemList
                            data={item}
                            key={index}
                        />
                    })
                }

            </div>
        </div>
    )
}
