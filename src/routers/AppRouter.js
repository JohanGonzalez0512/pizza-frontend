import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { DashboardRoutesLogin } from './DashboardRoutesLogin';



export const AppRouter = () => {
    return (

 
        <BrowserRouter>
            <Routes>
               
                <Route path="/login*" element={
                    // <PublicRoute>
                    <DashboardRoutesLogin />
                    // </PublicRoute>
                }
                />


             <Route path="/*" element={ 
                //  <PrivateRoute>
                 <DashboardRoutes />
                //  </PrivateRoute>
                } 
            />



            </Routes>
            </BrowserRouter>
           
    );
}
