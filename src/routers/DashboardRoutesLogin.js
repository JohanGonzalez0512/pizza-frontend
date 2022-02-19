import { Routes, Route } from 'react-router-dom';
import { LoginForgetPass } from '../components/login/LoginForgetPass';
import { LoginResetPass } from '../components/login/LoginResetPass';
import { LoginScreen } from '../components/login/LoginScreen';
import { LoginCode } from '../components/login/LoginCode';



export const DashboardRoutesLogin = () => {
    return (
        <>
         

            <div >
              
                <Routes>
                    
                    <Route path="login-forget-password" element={<LoginForgetPass/>} />
                    <Route path="login-code" element={<LoginCode/>} />
                    <Route path="login-reset-pass" element={<LoginResetPass/>} />

                    <Route path="/" element={<LoginScreen />} />

                </Routes>
            </div>
        </>
    )
}
