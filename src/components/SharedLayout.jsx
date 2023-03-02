import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer"
import Sidebar from "./Sidebar.jsx/Sidebar";
import { Outlet } from "react-router-dom";
import ToastCustom from "./Toast/ToastCustom";
const SharedLayout = () => {
    return <div className="relative max-w-screen-custom my-0 mx-auto">
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
        <ToastCustom />
    </div>
}

export default SharedLayout