import logo from '../../resources/logo.png'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { startLogin } from '../../actions/auth';
import { useDispatch } from 'react-redux';

export const LoginScreen = () => {


    const dispatch = useDispatch();

    const { handleSubmit, errors, touched, getFieldProps, resetForm } = useFormik({
        initialValues: {
            email: 'test@gmail.com',
            password: 'qwerty*123',
        },
        onSubmit: (values) => {
            dispatch(startLogin(values.email, values.password))
            resetForm()
        },
        validationSchema: Yup.object({

            password: Yup.string()
                .max(15, 'Debe de tener 15 caracteres o menos')
                .required('Requerido'),
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
                <form onSubmit={handleSubmit} className="login-card__form" >
                    <div className="inputs">
                        
                        <label htmlFor="email">Correo eletronico</label>
                        <input type="text" {...getFieldProps('email')} />
                        {touched.email && errors.email && <span>{errors.email}</span>}


                        <label htmlFor="password">Contraseña</label>
                        <input type="text" {...getFieldProps('password')} />
                        {touched.password && errors.password && <span>{errors.password}</span>}


                        <Link className='link' to='login-forget-password'
                        >¿Restablecer contraseña?</Link >

                    </div>
                    <button type="submit" className="btn">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    )
}
