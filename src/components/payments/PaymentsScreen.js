import React, { useState } from 'react';
import { SearchBar } from '../ui/filters/SearchBar';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { useDispatch } from 'react-redux';
import { reportStartGenerateReport } from '../../actions/payments';




const initial = {
    from: "",
    to: ""
}

export const PaymentsScreen = () => {
    const [initialState, setInitialState] = useState(initial)
    const dispatch = useDispatch();

    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, initialState);
        setInitialState(range);

    }
    const handleResetClick = () => {
        setInitialState(initial)
    }
    const { from, to } = initialState;
    const modifiers = { start: from, end: to };
    
    const handleSubmit = () => {
        dispatch(reportStartGenerateReport(from, to))
    }




    return (
        <div className='container'>
            <div className='card'>
                <h1 className="card__title">
                    Generar reporte
                </h1>
                <div className='filter-container'>
                    <div className='filter-container__description'>

                        <p >
                            {!from && !to && 'Por favor seleccione el primer dia.'}
                            {from && !to && 'Por favor seleccione el ultimo dia. '}
                            {from && to && `Seleccionado desde ${from.toLocaleDateString()} hasta
                                 ${to.toLocaleDateString()}`}{' '}
                        </p>
                    </div>
                    <div className='filter-container__date'>

                        <DayPicker

                            className="Selectable"
                            numberOfMonths={2}
                            selectedDays={[from, { from, to }]}
                            modifiers={modifiers}
                            onDayClick={handleDayClick}
                        />
                    </div>


                </div>
                <div className='buttons'>
                    {from && to &&
                        <>

                            <button className="btn-cancel" onClick={handleResetClick}>
                                Reiniciar
                            </button>
                            <button className="btn-add" onClick={handleSubmit}>
                                Generar Reporte
                            </button>
                        </>
                    }
                </div>
            </div>


        </div>
    )


};

