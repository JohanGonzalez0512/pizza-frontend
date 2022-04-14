import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { DashboardRoutesLogin } from './DashboardRoutesLogin';

import { startChecking } from "../actions/auth";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';


export const AppRouter = () => {
   
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    return (


        <BrowserRouter>
            <Routes>

                <Route path="/login/*" element={
                    <PublicRoute>
                        <DashboardRoutesLogin />
                    </PublicRoute>
                }
                />


                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRoutes />
                    </PrivateRoute>
                }
                />



            </Routes>
        </BrowserRouter>

    );
}
