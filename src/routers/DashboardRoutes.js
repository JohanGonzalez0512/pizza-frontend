import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { AddProducts } from '../components/inventory/AddProducts';
import { CategoriesScreen } from '../components/inventory/CategoriesScreen';
import { ProductsScreen } from '../components/inventory/ProductsScreen';
import { MakeOrder } from '../components/orders/MakeOrder';
import { OrdersHistory } from '../components/orders/OrdersHistory';
import { PaymentsScreen } from '../components/payments/PaymentsScreen';
import { Navbar } from '../components/ui/Navbar';




export const DashboardRoutes = () => {
    return (
        <>
         

           
              <Navbar/>
                <Routes>
                    
                    <Route path="inventario" element={<ProductsScreen/>} />
                    <Route path="inventario/agregar-catalogo" element={<AddProducts/>} />
                    {/* <Route path="inventario/añadir-catalogo" element={<ProductsScreen/>} /> */}
                    <Route path="pedidos" element={<MakeOrder/>} />
                    <Route path="pedidos/historial" element={<OrdersHistory/>} />
                    <Route path="contabilidad" element={<PaymentsScreen/>} />
                    <Route path="inventario/categorias" element={<CategoriesScreen/>} />
                    <Route path="/" element={<Home />} />

                </Routes>
            
        </>
    )
}