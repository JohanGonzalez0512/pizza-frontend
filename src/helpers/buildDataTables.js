import React from 'react';
import { ButtonTable } from '../components/ui/table/ButtonTable';
import { InputTable } from '../components/ui/table/InputTable';
import { SpanTable } from '../components/ui/table/SpanTable';

export const buildData = (
    id,
    name,
    code,
    category,
    handleClick1,
    handleClick2,
    data,
    coincidence
) => {

    return [
        { element: <SpanTable text={name} />, searched: coincidence[0] },
        { element: <SpanTable text={code} />, searched: coincidence[1] },
        { element: <SpanTable text={category} />, searched: coincidence[2] },
        { element: <ButtonTable id={data} id2={id} type={1} onClick2= {handleClick2 } onClick={handleClick1} />, searched: false },
    ];
}



export const buildDataRecord = (
    id, 
    number, 
    created_at, 
    total, 
    delivery_details, 
    change, 
    status,
    handleClick1,
    handleClick2,
    handleClick3,
    data,
    coincidence
) => {

    return [
        { element: <SpanTable text={number} />, searched: coincidence[0] },
        { element: <SpanTable text={created_at} />, searched: coincidence[1] },
        { element: <SpanTable text={delivery_details} />, searched: coincidence[2] },
        { element: <SpanTable text={total} />, searched: coincidence[3] },
        { element: <SpanTable text={change} />, searched: coincidence[4] },
        { element: <SpanTable text={status} />, searched: coincidence[5] },
        { element: <ButtonTable status ={status } id={id} id2={id} type={4} onClick2= {handleClick2 } onClick={handleClick1} />, searched: false },
        { element: <ButtonTable status ={status }id={id} type={3} onClick={handleClick3} />, searched: false },
    ];
}


export const builDataCategories = (
    id,
    name, 
    handleClick1,
    handleClick2,
    data,
    coincidence
    
) => {

    return [
   
        { element: <SpanTable text={name} />, searched: coincidence[0] },
        { element: <ButtonTable id={data} id2={id} type={1} onClick2= {handleClick2 } onClick={handleClick1} />, searched: false },
    ];

}


export const buildDataMenu = (
    id,
    name, 
    category, 
    price, 
    handleClick1,
    handleClick2,
    data,
    coincidence
) => {

    return [
        { element: <SpanTable text={name} />, searched: coincidence[0] },
        { element: <SpanTable text={price} />, searched: coincidence[1] },
        { element: <SpanTable text={category} />, searched: coincidence[2] },
        { element: <ButtonTable id={data} id2={id} type={1} onClick2= {handleClick2 } onClick={handleClick1} />, searched: false },
    ];
}


export const buildDataStock = (
    id,
    name, 
    code, 
    category, 
    price, 
    quantity, 
    date_expiraiton, 
    handleClick,
    coincidence
) => {

    return [
        { element: <SpanTable text={name} />, searched: coincidence[0] },
        { element: <SpanTable text={code} />, searched: coincidence[1] },
        { element: <SpanTable text={category} />, searched: coincidence[2] },
        { element: <SpanTable text={date_expiraiton} />, searched: false },
        { element: <SpanTable text={quantity} />, searched: coincidence[3] },
        { element: <SpanTable text={price} />, searched: coincidence[4] },
        { element: <ButtonTable id={id} type={2} onClick={handleClick} />, searched: false },
    ];
}







