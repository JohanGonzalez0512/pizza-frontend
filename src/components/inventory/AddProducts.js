import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SelectList } from '../ui/SelectList';

const categories = [
    {
        id:1,
        name:"Categoria 1"
    },
    {
        id:2,
        name:"Categoria 2"
    },
    {
        id:3,
        name:"Categoria 3"
    },
    {
        id:4,
        name:"Categoria 4"
    },
    {
        id:5,
        name:"Categoria 5"
    },
    {
        id:6,
        name:"Categoria 5"
    },
    {
        id:7,
        name:"Categoria 5"
    },
    {
        id:8,
        name:"Categoria 5"
    },
    {
        id:9,
        name:"Categoria 5"
    },
]

export const AddProducts = () => {

    const [category, setCategory] = useState({})

    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            name: '',
            
        },
        onSubmit: (values) => {
            resetForm()
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Requerido'),   
        })
    });


    return (
        <div className='container'>
            <div className='card'>
                <h1 className="card__title">
                    Añadir al catalogo de productos
                </h1>
           

            <form onSubmit={handleSubmit} className="form" >
                <div className='form__container'>

                    <div className="form__inputs">
                        
                        <label htmlFor="name">Nombre del producto</label>
                        <input type="text" {...getFieldProps('name')} />
                        {touched.name && errors.name && <span>{errors.name}</span>}


                        
                    </div>
                    
                    <SelectList item={category} items={categories} setItem={setCategory}/>
                </div>
                    <div className='btn__container'>
                    <Link to={"/inventario"}  className="btn-cancel">
                        Cancelar
                    </Link>
                    <button type="submit" className="btn-add">
                        Agregar producto
                    </button>
                    </div>
                </form>
                </div>
        </div>
    )
}
