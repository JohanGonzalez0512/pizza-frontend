import React from 'react';
import { ButtonTable } from '../components/ui/table/ButtonTable';
import { InputTable } from '../components/ui/table/InputTable';
import { SpanTable } from '../components/ui/table/SpanTable';

export const buildData = (
    name, code, category, date_expiraiton, quantity, price, coincidence
) => {
    
    return [
        { element: <SpanTable text={name} />, searched: coincidence[0] },
        { element: <SpanTable text={code} />, searched: coincidence[1] },
        { element: <SpanTable text={category} />, searched: coincidence[2] },
        { element: <SpanTable text={date_expiraiton} />, searched: false },
        { element: <SpanTable text={quantity} />, searched: coincidence[3] },
        { element: <SpanTable text={price} />, searched: coincidence[4] },
        { element: <ButtonTable type={1}  />, searched: false },
    ];
}



export const buildDataFertilizer = (id, date, concept, cost, anticipo, restante) => {
    return [
        { element: <SpanTable text={date} />, searched: false },
        { element: <SpanTable text={concept} />, searched: false },
        { element: <SpanTable text={cost} />, searched: false },
        { element: <SpanTable text={anticipo} />, searched: false },
        { element: <SpanTable text={restante} />, searched: false },
        { element: <ButtonTable type={1} id={id} />, searched: false },

    ];
}
