import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderStartCancelOrder, orderStartCompleteOrder, orderStartGetData } from '../../actions/order';
import { buildDataRecord } from '../../helpers/buildDataTables';
import { isACoincidenceSearch } from '../../helpers/isACoincidence';
import { SearchBar } from '../ui/filters/SearchBar';

import { Table } from '../ui/Table';


const headers = [
    {
        title: "Numero de la order",
        textAlign: "center",
    },
    {
        title: "Fecha de creacion",
        textAlign: "center",
    },
    {
        title: "Tipo de pedido",
        textAlign: "center",
    },
    {
        title: "Total",
        textAlign: "center",
    },
    {
        title: "Cambio",
        textAlign: "center",
    },
    {
        title: "Status",
        textAlign: "center",
    },
   
    {
        title: "Cancelar",
        textAlign: "center",
    },
    {
        title: "Completar",
        textAlign: "center",
    },
   


];

export const OrdersHistory = () => {

    const { ui, orders: { data } } = useSelector(state => state);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(orderStartGetData());
    }, []);
console.log(data)

    

    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });
    const [dataShow, setDataShow] = useState([])


    const handleClick = (id) => {
        dispatch(orderStartCancelOrder(id, false));
        console.log(id)
    }

    const handleClick3 = (id) => {
        dispatch(orderStartCompleteOrder(id));
        console.log(id)
    }

    
    const handleClick2 = (id) => {
         dispatch(orderStartCancelOrder(id, true));
        console.log(id)
    }

    const generateData = () => {
        const dataToShow = [];
        const { searchWord } = valueSearchFilter;
        data.forEach(({ id, number, created_at,  total, delivery_details, change , status}) => {
            const coincidence = isACoincidenceSearch(
                [number, created_at, total, change , delivery_details.type, status],
                searchWord
            );
            
            const dataBuilded = buildDataRecord(id,  number, created_at,  total, delivery_details.type, change, status, handleClick, handleClick2,handleClick3,{id, number, created_at,  total, delivery_details, change}, coincidence)

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




    return (
        <div className='container'>
            <div className='card'>
                <h1 className="card__title">
                    Historial de pedidos
                </h1>
                <div className='filters__container'>
                    <SearchBar valueSearchFilter={valueSearchFilter}
                        setValueSearchFilter={setValueSearchFilter}
                        placeholder={'Buscar por nombre'} />
                </div>

                <Table
                    headers={headers}
                    data={dataShow}
                    sizesColumns={[15.5, 14.5, 12.5, 12.5, 12.5, 12.5, 10,10]}
                />
            </div>
        </div>
    )


};
