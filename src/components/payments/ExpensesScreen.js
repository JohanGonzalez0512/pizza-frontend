import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { ExpenseStartCreateExpense } from '../../actions/payments';

export const ExpensesScreen = () => {

    const dispatch = useDispatch();

    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            concept: '',
            total: '',
        },
        onSubmit: (values) => {
             dispatch(ExpenseStartCreateExpense(values))
             resetForm()
        },
        validationSchema: Yup.object({
            concept: Yup.string()
                .required('Requerido'),
            total: Yup.number()
                .required('Requerido'),
        })
    });

    return (
        <div className="container">
            <form onSubmit={handleSubmit}className="card">
                <h1 className="card__title">
                    Gastos
                </h1>
                <div className="card__form scroll">
                    <div className="col">
                        <div className="card__form__item">
                            <label htmlFor="name">Concepto</label>
                            <input type="text" {...getFieldProps('concept')} />
                            {touched.concept && errors.concept && <span>{errors.concept}</span>}
                        </div>

                        <div className="card__form__item">
                            <label htmlFor="name">Monto</label>
                            <input type="number" {...getFieldProps('total')} />
                            {touched.total && errors.total && <span>{errors.total}</span>}

                        </div>
                    </div>

                </div>

                <div className="buttons">

                    <button className="btn-cancel" onClick={resetForm} >
                        Reiniciar
                    </button>
                    <button  type="submit" className="btn-add" >
                        Generar Gasto
                    </button>


                </div>
            </form>

        </div>
    )
}
