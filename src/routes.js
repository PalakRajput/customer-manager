import { Route, Routes } from "react-router-dom";
import CreateCustomer from "./components/customer/CreateCustomer";
import DisplayCustomers from "./components/customer/DisplayCustomers";
import CreateOrder from "./components/orders/CreateOrder";
import DisplayOrders from "./components/orders/DisplayOrders";

export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<CreateCustomer />} />
                <Route path="/customers" element={<DisplayCustomers />} />
                <Route exact path="/orders/:id" element={<DisplayOrders />} />
                <Route path="/orders" element={<DisplayOrders />} />
                <Route exact path="/addOrder/:cid" element={<CreateOrder />} />
            </Routes>
        </>
    )
}