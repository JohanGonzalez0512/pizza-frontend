
import logo from '../../resources/logo.png'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const LoginResetPass = () => {




    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            password1: '',
            password2: '',
        },
        onSubmit: (values) => {
            resetForm()
        },
        validationSchema: Yup.object({

            password1: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('Requerido'),
            password2: Yup.string()
                .oneOf([ Yup.ref('password1')],'Las contraseñas no son iguales')
                .required('Requerido'),
        })
    });




    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src={logo} alt="" className="logo" />
                </div>
                <form onSubmit={handleSubmit} className="login-card__form" >
                    <div className="inputs">

                        <label htmlFor="password1">Nueva contraseña</label>
                        <input type="text" {...getFieldProps('password1')} />
                        {touched.password1 && errors.password1 && <span>{errors.password1}</span>}


                        <label htmlFor="password2">Confirmar contraseña</label>
                        <input type="text" {...getFieldProps('password2')} />
                        {touched.password2 && errors.password2 && <span>{errors.password2}</span>}


                        
                    </div>
                    <button type="submit" className="btn">
                        Confirmar
                    </button>
                </form>
            </div>
        </div>
    )
}
