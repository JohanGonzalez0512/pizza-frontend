import React, { useState } from 'react';
import { SearchBar } from '../ui/filters/SearchBar';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';




const initial = {
    from: "",
    to: ""
}
const defaultProps = {
    numberOfMonths: 1,
};
export const PaymentsScreen = () => {
    const [initialState, setInitialState] = useState(initial)
    const handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, initialState);
        setInitialState(range);

    }
    console.log(initialState)

    const handleResetClick = () => {
        setInitialState(initial)
    }
    const { from, to } = initialState;
    const modifiers = { start: from, end: to };
    const [valueSearchFilter, setValueSearchFilter] = useState({
        searchWord: "",
    });




    return (
        <div className='container'>
            <div className='card'>
                <h1 className="card__title">
                    Contabilidad
                </h1>
                <div className='filter-container'>
                    <div className='filter-container__description'>

                        <p >
                            {!from && !to && 'Por favor seleccione el primer dia.'}
                            {from && !to && 'Por favor seleccione el ultimo dia. '}
                            {from &&
                                to &&
                                `Seleccionado desde ${from.toLocaleDateString()} hasta
                ${to.toLocaleDateString()}`}{' '}
                        </p>
                    </div>
                    <div className='filter-container__date'>

                        <DayPicker
                            style={{
                                fontSize:'2rem'
                            }}
                            className="Selectable"
                            numberOfMonths={2}
                            selectedDays={[from, { from, to }]}
                            modifiers={modifiers}
                            onDayClick={handleDayClick}
                        />
                    </div>


                </div>
                <div className='buttons'>
                    {from && to && (
                        <button className="btn-cancel" onClick={handleResetClick}>
                            Reiniciar
                        </button>
                    )}
                </div>
            </div>


        </div>
    )


};

