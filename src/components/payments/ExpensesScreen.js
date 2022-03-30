import React from 'react'

export const ExpensesScreen = () => {
    return (
        <div className="container">
            <div className="card">
                <h1 className="card__title">
                    Gastos
                </h1>
                <div className="card__form scroll">
                    <div className="col">
                        <div className="card__form__item">
                            <label htmlFor="name">Concepto</label>
                            <input
                                name='concept'
                                type="text" />
                        </div>
                        
                        <div className="card__form__item">
                            <label htmlFor="name">Monto</label>
                            <input
                                name='amount'
                                type="number" />
                       
                        </div>
                    </div>

                </div>

                <div className="buttons">

                    <button className="btn-cancel" >
                        Reiniciar
                    </button>
                    <button className="btn-add" >
                        Generar Gasto
                    </button>


                </div>
            </div>

        </div>
    )
}
