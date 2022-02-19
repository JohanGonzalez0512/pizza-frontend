import React, { useState } from 'react'
import { Cart } from '../Cart'
import { SearchBar } from '../filters/SearchBar'
import { Select } from '../filters/Select'
import { List } from '../List'

export const ListMenu = ({
    options,
    itemListData
}) => {

    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });

    return (
        <>
            <div className='filters__container'>
                <Select
                    options={options}
                    setValueSearchFilter={setValueSearchFilter}
                    defaultValue={'Buscar por categoria'}
                />
                <SearchBar
                    valueSearchFilter={valueSearchFilter}
                    setValueSearchFilter={setValueSearchFilter}
                    placeholder={'Buscar por nombre'}
                />
            </div>

            <List
                data={itemListData}
                filter={valueSearchFilter}
            />

        </>
    )
}
