import React, { useState } from 'react';
import { SearchBar } from '../ui/filters/SearchBar';





export const PaymentsScreen = () => {


    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });



   
    return (
        <div className='container'>
            <div className='card'>
                <h1 className="card__title">
                    Contabilidad
                </h1>
                <div className='filters__container'>
                    <SearchBar valueSearchFilter={valueSearchFilter}
                        setValueSearchFilter={setValueSearchFilter} 
                        placeholder={'Buscar por nombre'} />
                </div>

            </div>
        </div>
    )


};

