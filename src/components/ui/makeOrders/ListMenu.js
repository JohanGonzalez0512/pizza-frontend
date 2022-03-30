import React, { useEffect, useState } from 'react'
import { SearchBar } from '../filters/SearchBar'
import { List } from '../List'

export const ListMenu = ({
    itemListData
}) => {

    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });
    const [dataList, setDataList] = useState(itemListData);
    useEffect(() => {

        const data = [];
        const regex = new RegExp(valueSearchFilter.searchWord, 'g');
        itemListData.forEach(element => element.name.match(regex) && data.push(element));
        setDataList(data);

    }, [valueSearchFilter])

    return (
        <>
            <div className='filters__container'>
                <SearchBar
                    valueSearchFilter={valueSearchFilter}
                    setValueSearchFilter={setValueSearchFilter}
                    placeholder={'Buscar por nombre'}
                />
            </div>

            <List
                data={dataList}
                filter={valueSearchFilter}
            />

        </>
    )
}
