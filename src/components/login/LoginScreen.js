
import logo from '../../resources/logo.png'
import { Link } from 'react-router-dom';


export const LoginScreen = () => {




    return (
        <div className="login-page">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src={logo} alt="" className="logo" />
                </div>
                <form className="login-card__form" >
                    <div className="inputs">
                        <input
                            placeholder="Correo electrónico"
                            type="text"
                            name="email"

                        />
                        <input
                            placeholder="Contraseña"
                            type="password"
                            name="password"
                            id="pwd"

                        />
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
