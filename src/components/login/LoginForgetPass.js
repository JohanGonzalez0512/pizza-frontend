
import logo from '../../resources/logo.png'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const LoginForgetPass = () => {




    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: (values) => {
            resetForm()
        },
        validationSchema: Yup.object({

            email: Yup.string()
                .email('El correo no tiene un formato válido')
                .required('Requerido'),
        })
    });




    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="login-card__text">
                <h3>Escriba el correo electronico con el que registro la cuenta</h3>
                </div>
                <form onSubmit={handleSubmit} className="login-card__form" >
                    <div className="inputs">
                        
                        <label htmlFor="email">Correo eletronico </label>
                        <input type="text" {...getFieldProps('email')} />
                        {touched.email && errors.email && <span>{errors.email}</span>}



                    </div>
                    <button type="submit" className="btn">
                        Enviar correo de recuperacion
                    </button>
                </form>
            </div>
        </div>
    )
}
