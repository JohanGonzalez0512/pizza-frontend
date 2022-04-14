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







