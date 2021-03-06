import { Routes, Route } from 'react-router-dom';
import { Home } from '../components/Home';
import { AddProducts } from '../components/inventory/AddProducts';
import { CategoriesScreen } from '../components/inventory/CategoriesScreen';
import { ProductsScreen } from '../components/inventory/ProductsScreen';
import { StockScreen } from '../components/inventory/StockScreen';
import { CategoriesMenuScreen } from '../components/orders/administrationMenu/CategoriesMenuScreen';
import { MenuScreen } from '../components/orders/administrationMenu/MenuScreen';
import { InfoPaymentScreen } from '../components/orders/InfoPaymentScreen';
import { MakeOrder } from '../components/orders/MakeOrder';
import { OrdersHistory } from '../components/orders/OrdersHistory';
import { ExpensesScreen } from '../components/payments/ExpensesScreen';
import { PaymentsScreen } from '../components/payments/PaymentsScreen';
import { Navbar } from '../components/ui/Navbar';




export const DashboardRoutes = () => {
    return (
        <>
         

           
              <Navbar/>
                <Routes>     
                    <Route path="productos" element={<ProductsScreen/>} />
                    <Route path="inventario" element={<StockScreen/>} />
                    <Route path="pedidos" element={<MakeOrder/>} />
                    <Route path="pedidos/historial" element={<OrdersHistory/>} />
                    <Route path="pedidos/categorias" element={<CategoriesMenuScreen/>} />
                    <Route path="pedidos/menu" element={<MenuScreen/>} />
                    <Route path="contabilidad/gastos" element={<ExpensesScreen/>} />
                    <Route path="contabilidad/reporte" element={<PaymentsScreen/>} />
                    <Route path="pedidos/pago" element={<InfoPaymentScreen/>} />
                    <Route path="inventario/categorias" element={<CategoriesScreen/>} />
                    <Route path="/" element={<Home />} />

                </Routes>
            
        </>
    )
}